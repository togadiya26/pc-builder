import * as React from 'react';
import style from './DataTable.module.css';
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
// import AddDataDialog from './AddDataDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import EditProduct from '../EditProduct/EditProduct'
import { TableHead } from '@mui/material';
import AddProcessor from '../Products/Processor/AddProcessor';
import AddMotherboard from '../Products/Motherboard/AddMotherboard'
import AddCabinet from '../Products/Cabinet/AddCabinet';
import AddMonitor from '../Products/Monitor/AddMonitor'
import AddAccessories from '../Products/Accessories/AddAccessories';
import AddCabinetFan from '../Products/Cabinet Fan/AddCabinetFan'
import AddCooler from '../Products/Cooler/AddCooler';
import AddGraphicsCard from '../Products/Graphics Card/AddGraphicsCard'
import AddMouse from '../Products/Mouse/AddMouse';
import AddPowerSupplyUnit from '../Products/Power Suply Unit/AddPowerSupplyUnit';
import AddRAM from '../Products/RAM/AddRAM';
import AddStorage1 from '../Products/Storage 1/AddStorage1';
import AddStorage2 from '../Products/Storage 2/AddStorage2';
import AddKeyboard from '../Products/Keyboard/AddKeyboard';
import axios from 'axios';

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

// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function DataTable(props) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState("");

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.sP.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const deleteProduct = (index) => {
  //   const adjustedIndex = (page * rowsPerPage) + index;
  //   props.sP.splice(adjustedIndex, 1);
  //   // props.sP.splice(index,1)
  //   props.sSP([...props.sP])
  // };

  const token = JSON.parse(localStorage.getItem("token"))

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://pc-builder-backend-git-main-togadiya123.vercel.app/item/deleteprocessor/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (err) {
      console.log(err)
    }
  };

  let button;
  if (props.sP[0] && props.sP[0].name === 'processor') {
    button = <AddProcessor sP={props.sP} sSP={props.sSP} /> ;
  } else if (props.sP[0] && props.sP[0].name === 'motherboard') {
    button = <AddMotherboard sP={props.sP} sSP={props.sSP} /> ;
  } else if (props.sP[0] && props.sP[0].name === 'ram') {
    button = <AddRAM sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'cooler') {
    button = <AddCooler sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'storage1') {
    button = <AddStorage1 sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'storage2') {
    button = <AddStorage2 sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'graphicscard') {
    button = <AddGraphicsCard sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'powersupplyunit') {
    button = <AddPowerSupplyUnit sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'cabinet') {
    button = <AddCabinet sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'cabinetfan') {
    button = <AddCabinetFan sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'monitor') {
    button = <AddMonitor sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'keyboard') {
    button = <AddKeyboard sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'mouse') {
    button = <AddMouse sP={props.sP} sSP={props.sSP} />;
  } else if (props.sP[0] && props.sP[0].name === 'accessories') {
    button = <AddAccessories sP={props.sP} sSP={props.sSP} />;
  }

  // console.log(props.sP[0].name)
  return (
    <React.Fragment>
      <div className={style.tableHead}>
      <input
        className={style.search}
        type="text"
        placeholder='Search Here...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      {/* <AddDataDialog sP={props.sP} sSP={props.sSP} /> */}
      {button !== null && button}
      </div>
      <div>
        <TableContainer component={Paper} sx={{ marginTop: "2%", backgroundColor: "linen" }}>
          <Table sx={{ width: "100%" }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>ITEM</TableCell>
                <TableCell style={{ width: "20%" }} align="center" >IMAGE</TableCell>
                <TableCell style={{ width: "20%" }} align="center" >PRICE</TableCell>
                <TableCell style={{ width: "20%" }} align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
              (rowsPerPage > 0 && props.sP.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((ele) => ele.productname.toLowerCase().toString().match(search.toLowerCase().toString()) ||
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
                    <EditProduct index={index} sP={props.sP} sSP={props.sSP} />
                    <Button 
                    onClick={() => handleDelete(row._id)}
                    sx={{ color: "red", 
                    minWidth: "50px", 
                    backgroundColor: "#deb88745", 
                    '&:hover': { backgroundColor: 'burlywood' }, 
                    marginLeft: "10px" }}>
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
            </TableBody>
            <TableFooter>
              <TableRow sx={{width: "100%"}} >
                <TablePagination
                  sx={{width: "100%"}}
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={props.sP.length}
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