import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Processor, Motherboard, RAM, Cooler, Storage1, Storage2, GraphicsCard, PowerSupplyUnit, Cabinet, CabinetFan, Monitor, Keyboard, Mouse, Accessories } from './Array';

export default function ScrollDialog(props) {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [item, setItem] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [edit, setEdit] = React.useState(false);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    setItem(props.title)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  let array;
  if (item === 'Processor') {
    array = Processor;
  } else if (item === 'Motherboard') {
    array = Motherboard;
  } else if (item === 'RAM') {
    array = RAM;
  } else if (item === 'Cooler') {
    array = Cooler;
  } else if (item === 'Storage 1') {
    array = Storage1;
  } else if (item === 'Storage 2') {
    array = Storage2;
  } else if (item === 'Graphics Card') {
    array = GraphicsCard;
  } else if (item === 'Power Supply Unit') {
    array = PowerSupplyUnit;
  } else if (item === 'Cabinet') {
    array = Cabinet;
  } else if (item === 'Cabinet Fan') {
    array = CabinetFan;
  } else if (item === 'Monitor') {
    array = Monitor;
  } else if (item === 'Keyboard') {
    array = Keyboard;
  } else if (item === 'Mouse') {
    array = Mouse;
  } else if (item === 'Accessories') {
    array = Accessories;
  }

  return (
    <div>
      <Button onClick={handleClickOpen('paper')} sx={{ color: "black", minWidth: "50px", '&:hover': {backgroundColor: 'burlywood'}, backgroundColor: "#deb88745" }}>{edit ? <EditIcon/> : <AddBoxSharpIcon />}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            height: "70%",
            width: "50%"
          }
        }}
      >
        <DialogTitle id="scroll-dialog-title"
          sx={{ backgroundColor: "burlywood" }}
        >
          {props.title}
          <input
            className='search'
            type="text"
            placeholder='Search Here...'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </DialogTitle>
        <DialogContent
          dividers={scroll === 'paper'}
          sx={{ backgroundColor: "burlywood" }}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <React.Fragment>
              {array && array.filter((ele) => ele.item.toLowerCase().toString().match(search.toLowerCase().toString()) ||
                ele.price.toString().match(search.toString())).map((data, index) => (
                  <div className='main_div' key={index}>
                    <div className='child_div'>
                      <img src={data.img} height={50} width={50} alt="product" />
                    </div>
                    <div className='child_div'>
                      {data.item}
                    </div>
                    <div className='child_div'>
                      ₹{data.price}
                    </div>
                    <Button
                      onClick={() => {
                        const product = array.find(item => item.id === data.id);
                        props.onChange(product, setEdit)
                        setOpen(false)
                        props.setQty(prevQty => ({
                          ...prevQty,
                          [product.name]: props.initialQty[product.name]
                        }));
                      }}
                      sx={{
                        color:"black",
                        backgroundColor:"#deb88745",
                        '&:hover': {backgroundColor: 'burlywood'},
                        // marginBottom:"10px"
                      }}>
                      <AddShoppingCartIcon/>
                    </Button>
                  </div>))}
            </React.Fragment>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ backgroundColor: "burlywood" }}
        >
          <Button onClick={handleClose} sx={{ color: "black", minWidth: "50px", '&:hover': {backgroundColor: 'linen'}, backgroundColor: "#faf0e64a" }}><CloseIcon/></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} 