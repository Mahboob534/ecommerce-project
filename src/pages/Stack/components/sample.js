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
        gap: 2,
        marginInline: 2,
        m: 5,
        direction: "rtl",
        fontFamily: " IRANSans-web",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ direction: "rtl", textAlign: "center" }}
      >
        <Grid item xs={6} md={4}>
        <Button
          sx={{fontFamily: " IRANSans-web", backgroundColor: "#86efac", width: "100px", mx: 2 ,mr:80 }}
         
          variant="outlined"
          onClick={() => {
            let temp=[]
            swal({
              title: ` ویرایش`,
              text: "آیا تغییرات اعمال شود ",
              icon: "warning",
              buttons: ["خیر", "بله"],
              dangerMode: true,
            }).then(async (willEdit) => {
              if (willEdit) {
                changeArr.map((index) => {
                  const updatePro = data.data.find((item) => item.id === index);
                 let result= axios.put(`http://localhost:3002/products/${index}`, updatePro)
                 temp.push(result)
                 const promises= temp
                 Promise.all(promises).
                 then((results) => results.forEach((result) =>{ if(result.status ==200){

                   swal("تغییرات با موفقیت اعمال شد", {
                    icon: "success",
                  });
                 }
                
                })).catch(() => {
                  axios.put(`http://localhost:3002/products/${index}`, updatePro).then((res)=>
                  console.log(res))
                   swal("مشکلی پیش امده دوباره امتحان کنید ", {
                    icon: "error",
                  });

                })
               
                    
                });

                await swal("تغییرات با موفقیت اعمال شد", {
                  icon: "success",
                });
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
          sx={{ minWidth: 650, minHeight: 150 }}
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
