import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function UpdateProcessor(props) {

  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState({
    name: "",
    item: "",
    price: "",
    img: null
  });
  const [disabled, setDisabled] = React.useState(false);
  const fileInput = React.useRef(null);

  // React.useEffect(() => {
  //   if (props.sP.length !== 0 && props.index !== undefined) {
  //     setAddProduct({
  //       name: props.sP[0].name,
  //       item: props.sP[props.index]?.item || "",
  //       price: props.sP[props.index]?.price || "",
  //       img: props.sP[props.index]?.img || null
  //     });
  //   }
  // }, [props.sP, props.index]);

  const handleClickOpen = () => {

    setOpen(true);
    // addProduct.img !== null && setDisabled(true)

    if (props.sP.length !== 0 && props.index !== undefined) {
      setAddProduct({
        name: props.sP[0].name,
        item: props.sP[props.index]?.item || "",
        price: props.sP[props.index]?.price || "",
        img: props.sP[props.index]?.img || null
      });
      setDisabled(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddProduct({ ...addProduct, [name]: value });
  }

  const Validation = () => {
    if (addProduct.item === '' ) {
      alert("please enter item details...");
      return false;
    } else if (addProduct.price === '') {
      alert('please enter amount...');
      return false;
    }
    else if (addProduct.img === null) {
      alert('please upload an image...');
      return false;
    }
    else {
      alert("Product Updated Successfully");
      return true;
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if(Validation()){
    props.sP.splice(props.index,1,addProduct)
    props.sSP([...props.sP])
    setAddProduct({
      name: "",
      item: "",
      price: "",
      img: null
    });
    setOpen(false);
    setDisabled(false);
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setAddProduct({ ...addProduct, img: URL.createObjectURL(file) });
      setDisabled(true);
    }
  }

  function handleReset() {
    setAddProduct({ ...addProduct, img: null });
    setDisabled(false);
    fileInput.current.value = null;
  }

  return (
    <div>
      <Button 
      sx={{ color: "green", 
                    minWidth: "50px", 
                    backgroundColor: "#deb88745", 
                    '&:hover': { backgroundColor: 'burlywood' }, 
                    marginLeft: "10px" }} onClick={handleClickOpen} >
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "burlywood" }} >Add Product</DialogTitle>
        <DialogContent sx={{ backgroundColor: "burlywood" }} >
          <TextField placeholder='Item' name="item" value={addProduct.item} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='Price' name="price" value={addProduct.price} onChange={handleInputChange} type="number" sx={{ width: "100%", marginBottom: "2%" }} />
          <div>
            <input type="file" id="image" name="img" onChange={handleImageChange} ref={fileInput} disabled={disabled}/>
            <div style={{margin: "2%"}}>
            {addProduct.img && <img src={addProduct.img} alt="SelectedImage" height={50} width={50} />}
            {addProduct.img &&
              <Button
                onClick={handleReset}
                sx={{
                  color: "black",
                  backgroundColor: "#faf0e680",
                  '&:hover': { backgroundColor: 'linen' },
                  marginLeft: "10px",
                  minWidth: "35px", 
                }}>
                <ClearIcon />
              </Button>}
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "burlywood" }}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "#faf0e680",
              '&:hover': { backgroundColor: 'linen' },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "#faf0e680",
              '&:hover': { backgroundColor: 'linen' },
            }}
            onClick={handleUpdate}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}