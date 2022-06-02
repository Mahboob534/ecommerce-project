import React, { useEffect } from "react";
import { Box, Grid, Button, Typography, Modal } from "@mui/material";
import TableOrderModal from "../../pages/Orders/components/TableOrderModal";
import gatAllProduct from "../../api/getAll/getAllproduct";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../config/variable.config";
import {convertTimeStampToDate} from '../../Utils/convetTime'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalOrder(props) {
  let data = props.data;
  let handleChange = props.handleChange;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [product, setProduct] = React.useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const products = await gatAllProduct();

      setProduct(products.data);
    } catch (error) {
      alert("loading");
    }
  }
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  console.log(token);
  function changeStatus() {
    data.orderStatus = "1";
    axios
      .put(`http://localhost:3002/orders/${data.id}`, data)
      .then((res) => {
        toast.info("وضعیت سفارش تغییر کرد", { position: "bottom-left" });
        handleChange(3);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ToastContainer />
      <Button
        sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
        variant="text"
        onClick={handleOpen}
      >
        {" "}
        بررسی سفارشات
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
          >
            نمایش سفارش
          </Typography>
          <Grid item xs={12}>
            <label>
              نام مشتری : {`${data.firstName}${" "}${data.lastName} `}
            </label>
          </Grid>
          <Grid item xs={12}>
            <label>آدرس : {data.shippingAddress}</label>
          </Grid>
          <Grid item xs={12}>
            <label>تلفن : {data.phone}</label>
          </Grid>
          <Grid item xs={12}>
            <label>زمان تحویل : {convertTimeStampToDate(data.delivery)} {}</label>
          </Grid>
          <Grid item xs={12}>
            <label>زمان سفارش : {convertTimeStampToDate(data.createdAt)}</label>
          </Grid>
          <Grid>
            <TableOrderModal data={data} product={product} />
          </Grid>
          <Grid>
            {data.orderStatus == "3" ? (
              <Button
                sx={{
                  backgroundColor: "#86efac",
                  width: "100px",
                  mt: 2,
                  mx: 13,
                  fontFamily: " IRANSans-web",
                }}
                variant="outlined"
                onClick={changeStatus}
              >
                تحویل شد
              </Button>
            ) : (
              ""
            )}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
