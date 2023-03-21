import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../Firebase/Firebase';
import { getMotherboard } from '../../API/Api';


export default function UpdateMotherboard(props) {

  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState({
    productname: "",
    price: "",
    image: null,
  });
  const [disabled, setDisabled] = React.useState(false);
  const fileInput = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
    if (props.sP.length !== 0 && props.index !== undefined) {
      setAddProduct({
        productname: props.sP[props.index]?.productname || "",
        price: props.sP[props.index]?.price || "",
        image: props.sP[props.index]?.image || null
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
    if (addProduct.productname === '') {
      alert("please enter product name...");
      return false;
    } else if (addProduct.price === '') {
      alert('please enter amount...');
      return false;
    } else if (addProduct.image === null) {
      alert('please upload an image...');
      return false;
    } else {
      return true;
    }
  }

  const handleUpdate = async (e) => {

    const token = JSON.parse(localStorage.getItem("token"));

    e.preventDefault()

    if (Validation()) {
      try {
        const response = await axios.put(
          `https://pc-builder-backend-git-main-togadiya123.vercel.app/item/updatemotherboard/${props.id}`, addProduct, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        console.log(response);
        alert("Motherboard Updated successfully!");
      } catch (error) {
        console.log(error);
        alert("Error occurred while updating Motherboard.");
      }

      const MotherboardData = await getMotherboard();
      props.sSP(MotherboardData);

    }

    setOpen(false);
    setDisabled(false);
  }

  function handleImageChange(event) {

    const fileInput = document.getElementById("image");

   // Generate a random string to append to the file name
   const randomString = Math.random().toString(36).substring(2, 8);
   const fileName = `${randomString}_${fileInput.files[0].name}`;
   // Upload file to Firebase Storage
   const storageRef = ref(storage, `/Motherboard/${fileName}`);
   const uploadTask = uploadBytesResumable(storageRef, fileInput.files[0]);
    
    // Monitor the upload progresscors
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    }, (error) => {
      console.error(error);
    },

      async () => {
        // Upload completed successfully, get download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", downloadURL);
        setAddProduct({ ...addProduct, image: downloadURL });
      });
  }

  function handleReset() {
    setAddProduct({ ...addProduct, image: null });
    setDisabled(false);
  }


  return (
    <div>
      <Button
        sx={{
          color: "green",
          minWidth: "50px",
          backgroundColor: "#00008b6e",
          '&:hover': { backgroundColor: 'darkblue' },
          marginLeft: "10px"
        }} onClick={handleClickOpen} >
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "burlywood" }} >Update Product</DialogTitle>
        <DialogContent sx={{ backgroundColor: "burlywood" }} >
          <TextField placeholder='productname' name="productname" value={addProduct.productname} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='Price' name="price" value={addProduct.price} onChange={handleInputChange} type="number" sx={{ width: "100%", marginBottom: "2%" }} />
          <div>
            <input type="file" id="image" name="image" onChange={handleImageChange} ref={fileInput} disabled={disabled} />
            <div style={{ margin: "2%" }}>
              {addProduct.image && <img src={addProduct.image} alt="SelectedImage" height={50} width={50} />}
              {addProduct.image &&
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
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}