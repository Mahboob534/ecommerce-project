import { useMemo, useState } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useFetch } from "./usefetch";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import EasyEdit, { Types } from "react-easy-edit";
import updateOneProduct from "../../../api/putAll/updateOneProduct";
import getOneProducts from '../../../api/getAll/getOneProduct'
const SamplePaginaion = () => {
  let changeArr = [];
  const [editMode, seteditMode] = useState(false);
  const limit = useMemo(() => 5, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/products?_page=${activePage}&_limit=${limit}}`
  );

  if (error) {
    return (
      <>
        <Typography variant="body1">ERROR - Typography Body1</Typography>
        <Typography variant="body2">ERROR - Typography Body2</Typography>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       
        marginInline: 2,
        m:3,
        direction: "rtl",
        fontFamily: " IRANSans-web",
        height:'100%'
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ direction: "rtl", textAlign: "center",height:'80%'}}
      >
        <Grid item xs={12} md={12}>
        <Button
          sx={{fontFamily: " IRANSans-web", backgroundColor: "#86efac", width: "50px", px:10 }}
         
          variant="outlined"
          onClick={() => {
            let temp=[]
            swal({
              title: ` ویرایش`,
              text: "آیا تغییرات اعمال شود ",
              icon: "warning",
              buttons: ["خیر", "بله"],
              dangerMode: true,
            }).then(async (willEdit) =>{ 
              if (willEdit) {
               let promises= changeArr.map((index) => {
                  const updatePro = data.data.find((item) => item.id === index);
                 return  updateOneProduct(index, updatePro)
                });
                Promise.all(promises).
                then((res) => res.forEach((result) =>{ if(result.status ==200){
                  getOneProducts(result.data.id).then(()=>console.log(true))
                  swal("تغییرات با موفقیت اعمال شد", {
                    icon: "success",
                  });
                                  
                }
               
               })).catch(() => {
                
                  swal("مشکلی پیش امده دوباره امتحان کنید ", {
                   icon: "error",
                 });

               })
               
              } else {
                await swal("محصول تغییرات اعمال نشد");
              }
              window.location.reload(true);
            });
          }}
        >
          {" "}
          ذخیره
        </Button>
      </Grid>
        <Table
          sx={{ minWidth: 200, minHeight: 100  }}
          size="large"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                شماره
              </TableCell>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                نام محصول
              </TableCell>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                موجودی
              </TableCell>
              <TableCell
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                قیمت
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative", textAlign: "right" }}>
            {loading ? (
              <Box
                sx={{
                  position: "absolute",
                  background: "#fafafa",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                {data.data.map((record) => (
                  <TableRow key={record.name}>
                    <TableCell
                      sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                    >
                      {record.id}
                    </TableCell>
                    <TableCell
                      sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                    >
                      {record.name}
                    </TableCell>
                    <TableCell
                      sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                      onChange={(e)=>record.count = e.target.value }
                    >
                      <EasyEdit
                        value={String(record.count)}
                        type={Types.TEXT}
                        onSave={() => changeArr.push(record.id)}
                        editMode={editMode}
                      />{" "}
                    </TableCell>
                    <TableCell
                      sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
                      onChange={(e)=>record.price = e.target.value }
                    >
                     <EasyEdit
                        value={String(record.price)}
                        type={Types.TEXT}
                        onSave={() => changeArr.push(record.id)}
                        editMode={editMode}
                      />
                   
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        variant="outlined"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(data?.headers["x-total-count"] / limit)}
      
        onChange={(_, page) => {
          console.log("page:", page);
          setActivePage(page);
        }}
      />
    </Box>
  );
};

export default SamplePaginaion;
