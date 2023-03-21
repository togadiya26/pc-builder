import * as React from 'react';
import style from './CoolerTable.module.css';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableHead } from '@mui/material';
import axios from 'axios';
import { getCooler } from '../../API/Api';
import AddCooler from './AddCooler';
import UpdateCooler from './UpdateCooler';
import ColorRingLoader from '../../Loader/ColorRingLoader';

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
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function CoolerTable(props) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState("");
  const [Cooler, setCooler] = React.useState([]);
  const [load, setLoad] = React.useState(true)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Cooler.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const fetchCoolerData = async () => {
      const CoolerData = await getCooler();
      setCooler(CoolerData);
      setLoad(false)
    }
    fetchCoolerData();
  }, []);

  const handleDelete = async (id) => {

    const token = JSON.parse(localStorage.getItem("token"))
    const confirmed = window.confirm("Are you sure you want to delete this item?");

    if (confirmed) {
      try {
        await axios.delete(`https://pc-builder-backend-git-main-togadiya123.vercel.app/item/deleteitem/coolers/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (err) {
        console.log(err)
      }

      const CoolerData = await getCooler();
      setCooler(CoolerData);
    }
  };

  return (
    <React.Fragment>
      <div className={style.tableHead}>
        <input
          className={style.search}
          type="text"
          placeholder='Search Here...'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <AddCooler sP={Cooler} sSP={setCooler} />
      </div>
      <div>
        <TableContainer component={Paper} sx={{ marginTop: "2%", backgroundColor: "aliceblue" }}>
          <Table sx={{ width: "100%" }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>ITEM</TableCell>
                <TableCell style={{ width: "20%" }} align="center" >IMAGE</TableCell>
                <TableCell style={{ width: "20%" }} align="center" >PRICE</TableCell>
                <TableCell style={{ width: "20%" }} align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            {load ?
              <ColorRingLoader /> :
              <TableBody>
                {
                  (rowsPerPage > 0 && Cooler.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((ele) => ele.productname.toLowerCase().toString().match(search.toLowerCase().toString()) ||
                    ele.price.toString().match(search.toString())
                  )).map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.productname}
                      </TableCell>
                      <TableCell style={{ width: "20%" }} align="center">
                        <img src={row.image ? row.image : row.img.name} alt='product' height={50} width={50} />
                      </TableCell>
                      <TableCell style={{ width: "20%" }} align="center">
                        {row.price}
                      </TableCell>
                      <TableCell style={{ width: "20%" }} align="center">
                        <div className={style.buttonCell}>
                          <UpdateCooler id={row._id} index={index} sP={Cooler} sSP={setCooler} />
                          <Button
                            onClick={() => handleDelete(row._id)}
                            sx={{
                              color: "red",
                              minWidth: "50px",
                              backgroundColor: "#00008b6e",
                              '&:hover': { backgroundColor: 'darkblue' },
                              marginLeft: "10px"
                            }}>
                            <DeleteIcon />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>}
            <TableFooter>
              <TableRow sx={{ width: "100%" }} >
                <TablePagination
                  sx={{ width: "100%" }}
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={page + 1}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
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
      </div>
    </React.Fragment>
  );
}