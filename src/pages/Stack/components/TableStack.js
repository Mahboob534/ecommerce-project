import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import EasyEdit, { Types } from "react-easy-edit";
import { useDispatch } from "react-redux";
import {setIndex} from '../../../redux/action/EditIndex'
import { Grid,Button } from "@mui/material";
import axios from 'axios'
import swal from "sweetalert";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    
    <Box
      sx={{ flexShrink: 0, display: "flex", justifyContent: "space-between" }}
    >
     
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

export default function CustomPaginationActionsTable(props) {
  let rows = props.row;
  // let flag= props.flag
  //let setFlag=props.setFlag
  


  const [flag, setFlag] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [editMode, seteditMode] = React.useState(false);
  let dispatch=useDispatch()
let  changeArr=[]



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  return (
    <TableContainer
      component={Paper}
      sx={{ direction: "rtl", mr: 30, width: "60vw", height: "60vh" }}
    >
      <Grid item xs={6} md={4}>
  <Button sx={{backgroundColor:"#86efac", width:'100px', m:3 }} variant="outlined" 
  onClick={()=>{
    swal({
      title:  ` ویرایش`,
      text: "آیا تغییرات اعمال شود ",
      icon: "warning",
      buttons:["خیر", "بله"],
      dangerMode: true,
    })
    .then(async(willDelete) => {
      if (willDelete) {
        changeArr.map((index)=>{
          const updatePro= rows.find((item)=>item.id===index)
            
             axios.put(`http://localhost:3002/products/${index}`,updatePro).then(res => console.log(res.data))
            
         })
       

      await swal("تغییرات با موفقیت اعمال شد", {
          icon: "success",
          
        });
      } else {
     await   swal("محصول تغییرات اعمال نشد");
      }
      window.location.reload(true);
    })
   


   } 
    
  
   
  }
  
  > ذخیره</Button>
  </Grid>
      <Table aria-label="custom pagination table">
        <TableBody sx={{ direction: "rtl" }}>
          <TableRow key={1}>
            <TableCell style={{ width: 40 }} align="right">
              کالا
            </TableCell>
            <TableCell
              style={{ width: 40 }}
              component="th"
              scope="row"
              align="right"
            >
              قیمت
            </TableCell>
            <TableCell style={{ width: 40 }} align="right">
              موجودی
            </TableCell>
          </TableRow>

          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ width: 40 }} align="right">
                {row.name}
              </TableCell>

              <TableCell
                style={{ width: 30 }}
                component="th"
                scope="row"
                align="right"
                name="price"
              onChange={(e)=>{ row.price = e.target.value
                console.log(row.price);
              }} 
                
              >
                
                <EasyEdit
                value={String(row.price)}
                   type={Types.TEXT}
                  onSave={()=>changeArr.push(row.id)}
                   
                  
                  editMode={editMode}
                  
                />  
              </TableCell>
              <TableCell style={{ width: 30 }} name="count" align="right" onChange={(e)=>row.count = e.target.value }  >
                                                               
              <EasyEdit
                value={(row.count)}
                   type={Types.TEXT}
                   
                  onSave={() => { changeArr.push(row.id)
                    

                  }}
                  editMode={editMode}
                  
                />
              
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
