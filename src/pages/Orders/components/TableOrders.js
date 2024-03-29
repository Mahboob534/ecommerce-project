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
import Button from "@mui/material/Button";
import { convertTimeStampToDate } from "../../../Utils/convetTime";
import ModalOrder from "../../../componentes/Modal/ModaleOrder";
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

// function createData(name, totalprice, date, checkOrder) {
//   return {name, totalprice, date, checkOrder};
// }

export default function CustomPaginationActionsTable(props) {
  let rows = props.row;
  let handleChange = props.handleChange;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      sx={{
        direction: "rtl",
        width: { xs: "100%", sm: "100%", md: "60%" },
        height: "75vh",
        mx: { xs: 0, sm: 0, md: 20 },
      }}
    >
      <Table aria-label="custom pagination table">
        <TableBody sx={{ direction: "rtl" }}>
          <TableRow key={1}>
            <TableCell
              align="right"
              sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
            >
              نام و نام خانوادگی
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="right"
              sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
            >
              مجموع مبلغ
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
            >
              تاریخ سفارش
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
            >
              <Button sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}>
                بررسی سفارشات
              </Button>
            </TableCell>
          </TableRow>

          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                align="right"
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                {`${row.firstName}${" "}${row.lastName} `}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                {row.purchaseTotal}
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                {convertTimeStampToDate(row.createdAt)}
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
              >
                <Button>
                  <ModalOrder data={row} handleChange={handleChange} />
                </Button>
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
