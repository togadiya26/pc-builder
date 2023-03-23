import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { getAllProducts } from './API/Api';
import { CircularProgress } from '@mui/material';

export default function ScrollDialog(props) {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [item, setItem] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [Processor, setProcessor] = React.useState([]);
  const [Motherboard, setMotherboard] = React.useState([]);
  const [RAM, setRAM] = React.useState([]);
  const [Cooler, setCooler] = React.useState([]);
  const [Storage1, setStorage1] = React.useState([]);
  const [Storage2, setStorage2] = React.useState([]);
  const [GraphicsCard, setGraphicsCard] = React.useState([]);
  const [PowerSupplyUnit, setPowerSupplyUnit] = React.useState([]);
  const [Cabinet, setCabinet] = React.useState([]);
  const [CabinetFan, setCabinetFan] = React.useState([]);
  const [Monitor, setMonitor] = React.useState([]);
  const [Keyboard, setKeyboard] = React.useState([]);
  const [Mouse, setMouse] = React.useState([]);
  const [Accessories, setAccessories] = React.useState([]);

  // React.useEffect(() => {
  const fetchAllProductsData = async () => {
    const AllProductsData = await getAllProducts();
    setProcessor(AllProductsData.Processor);
    setMotherboard(AllProductsData.Motherboards);
    setRAM(AllProductsData.Rams);
    setCooler(AllProductsData.Cooler);
    setStorage1(AllProductsData.Storage1);
    setStorage2(AllProductsData.Storage2);
    setGraphicsCard(AllProductsData.Graphicscard);
    setPowerSupplyUnit(AllProductsData.Powersupplyunit);
    setCabinet(AllProductsData.Cabinets);
    setCabinetFan(AllProductsData.Cabinetfan);
    setMonitor(AllProductsData.Monitor);
    setKeyboard(AllProductsData.Keyboard);
    setMouse(AllProductsData.Mouse);
    setAccessories(AllProductsData.Accessories);
  }
  // }, []);

  const handleClickOpen = (scrollType) => () => {
    setLoading(true);
    fetchAllProductsData().then(() => {
      setLoading(false);
      setOpen(true);
      setScroll(scrollType);
      setItem(props.title);
    });
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
  } else if (item === 'Ram') {
    array = RAM;
  } else if (item === 'Cooler') {
    array = Cooler;
  } else if (item === 'Storage1') {
    array = Storage1;
  } else if (item === 'Storage2') {
    array = Storage2;
  } else if (item === 'Graphicscard') {
    array = GraphicsCard;
  } else if (item === 'Powersupplyunit') {
    array = PowerSupplyUnit;
  } else if (item === 'Cabinet') {
    array = Cabinet;
  } else if (item === 'Cabinetfan') {
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
      <Button
        onClick={handleClickOpen('paper')}
        sx={{
          color: "aliceblue",
          minWidth: "50px",
          '&:hover': { backgroundColor: 'darkblue' },
          backgroundColor: "#00008bab",
          marginLeft: "15px"
        }}
        disabled={loading}>
        {loading ? <CircularProgress sx={{color: 'aliceblue'}} size={24} /> : <AddBoxSharpIcon />}
      </Button>
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
          sx={{
            backgroundColor: "#00008b6e",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <b>{props.title}</b>
          <input
            className='search'
            type="text"
            placeholder='Search Here...'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <Button
            onClick={handleClose}
            sx={{
              color: "aliceblue",
              minWidth: "35px",
              height: "35px",
              '&:hover': { backgroundColor: 'darkblue' },
              backgroundColor: "#00008b6e"
            }}>
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent
          dividers={scroll === 'paper'}
          sx={{ backgroundColor: "#00008b6e" }}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <React.Fragment>
              {array && array.filter((ele) => ele.productname.toLowerCase().toString().match(search.toLowerCase().toString()) ||
                ele.price.toString().match(search.toString())).map((data, index) => (
                  <div className='main_div' key={index}>
                    <div className='child_div'>
                      <img src={data.image} height={50} width={50} alt="product" />
                    </div>
                    <div className='child_div'>
                      {data.productname}
                    </div>
                    <div className='price_div'>
                      ₹{data.price}
                      <Button
                        onClick={() => {
                          const product = array.find(item => item._id === data._id);
                          props.onChange(product)
                          setOpen(false)
                          props.setQty(prevQty => ({
                            ...prevQty,
                            [product.name]: props.initialQty[product.name]
                          }));
                        }}
                        sx={{
                          color: "aliceblue",
                          backgroundColor: "#00008bab",
                          '&:hover': { backgroundColor: 'darkblue' },
                          minWidth: "45px",
                          height: "35px"
                        }}>
                        <AddShoppingCartIcon />
                      </Button>
                    </div>
                  </div>))}
            </React.Fragment>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
} 