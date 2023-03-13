import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { storage } from '../../Firebase/Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

export default function AddDataDialog(props) {

  const initialAddProduct = {
    name: props.sP.length !== 0 && props.sP[0].name,
    item: "",
    price: "",
    img: null
  }

//   const [image, setImage] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState(initialAddProduct);
  const [disabled, setDisabled] = React.useState(false);
  const fileInput = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
    setAddProduct(initialAddProduct)
    setDisabled(false)
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
      alert("Product Added Successfully");
      return true;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Validation()) {
      return;
    }
    props.sSP([...props.sP, { name: addProduct.name, item: addProduct.item, price: addProduct.price, img: addProduct.img }])
    setAddProduct(initialAddProduct)
    setOpen(false);
    setDisabled(false);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    // uploadfile(file)
    if (file) {
      setAddProduct({ ...addProduct, img: URL.createObjectURL(file) });
      setDisabled(true);
    }
  }

//   const uploadfile = (file) => {
//     if (!file) return
//     const storageRef = ref(storage, `/files/${file.name}`)
//     const uploadTask = uploadBytesResumable(storageRef, file)
//     uploadTask.on('a',
//         () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((url) => setImage(url));
//         }
//     )
//   }

//   console.log(image)

  function handleReset() {
    setAddProduct({ ...addProduct, img: null });
    setDisabled(false);

    // fileInput.current.value = null;
  }

  return (
    <div>
      <Button sx={{ backgroundColor: "#faf0e680", '&:hover': { backgroundColor: 'linen' } }} onClick={handleClickOpen} disabled={props.sP.length === 0}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "burlywood" }} >Add Product</DialogTitle>
        <DialogContent sx={{ backgroundColor: "burlywood" }} >
          <TextField placeholder='Item' name="item" value={addProduct.item} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='Price' name="price" value={addProduct.price} onChange={handleInputChange} type="number" sx={{ width: "100%", marginBottom: "2%" }} />
          <div>
            {/* <label htmlFor="image">
              <Button 
              disabled={disabled} 
              sx={{
                color: "black",
                backgroundColor: "#faf0e680",
                '&:hover': { backgroundColor: 'linen' },
              }}>
                Upload Image
              </Button>
            </label> */}
            <input type="file" id="image" name="img" onChange={handleImageChange} ref={fileInput} disabled={disabled} />
            <div style={{ margin: "2%" }}>
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
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}