import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../Firebase/Firebase';
import { getKeyboard } from '../../API/Api';
import ThreeDotsLoader from '../../Loader/ThreeDotsLoader';


export default function AddKeyboard(props) {

  const initialAddProduct = {
    productname: "",
    price: "",
    image: null,
    size: "",
    connectivity: "",
    isUploading: false
  }

  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState(initialAddProduct);
  const [disabled, setDisabled] = React.useState(false);
  const fileInput = React.useRef(null);

  const token = JSON.parse(localStorage.getItem("token"));

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
    if (addProduct.productname === '') {
      alert("please enter product name...");
      return false;
    } else if (addProduct.price === '') {
      alert('please enter amount...');
      return false;
    } else if (addProduct.image === null) {
      alert('please upload an image...');
      return false;
    } else if (addProduct.size === null) {
      alert("please enter size...");
      return true;
    } else if (addProduct.connectivity === null) {
      alert("please enter connectivity...")
    } else {
      return true;
    }
  }

  const dataToSend = {
    productname: addProduct.productname,
    price: addProduct.price,
    image: addProduct.image,
    size: addProduct.size,
    connectivity: addProduct.connectivity
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (Validation()) {
      try {
        const response = await axios.post(
          "https://pc-builder-backend-git-main-togadiya123.vercel.app/item/addkeyboard", dataToSend, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        alert("Keyboard added successfully!");
      } catch (error) {
        console.log(error);
        alert("Error occurred while adding Keyboard.");
      }
    }

    const KeyboardData = await getKeyboard();
    props.sSP(KeyboardData);

    setAddProduct(initialAddProduct);
    setOpen(false);
  }

  function handleImageChange(event) {
    const fileInput = document.getElementById("image");

    // Generate a random string to append to the file name
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `${randomString}_${fileInput.files[0].name}`;
    // Upload file to Firebase Storage
    const storageRef = ref(storage, `/Keyboard/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, fileInput.files[0]);

    // Update state to indicate that the image is currently being uploaded
    setAddProduct({ ...addProduct, isUploading: true });

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error(error);
        // Update state to indicate that the image upload has failed
        setAddProduct({ ...addProduct, isUploading: false, uploadError: true });
      },
      async () => {
        // Upload completed successfully, get download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        console.log("File available at", downloadURL);

        // Update state to indicate that the image upload has succeeded
        setAddProduct({ ...addProduct, isUploading: false, image: downloadURL });
      }
    );
  }

  function handleReset() {
    setAddProduct({ ...addProduct, image: null });
    setDisabled(false);
  }


  return (
    <div>
      <Button sx={{ backgroundColor: "#00008b6e", color: "aliceblue", '&:hover': { backgroundColor: 'darkblue' } }} onClick={handleClickOpen} disabled={props.sP.length === 0}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "burlywood" }} >Add Product</DialogTitle>
        <DialogContent sx={{ backgroundColor: "burlywood" }} >
          <TextField placeholder='product name' name="productname" value={addProduct.productname} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='size' name="size" value={addProduct.size} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='connectivity' name="connectivity" value={addProduct.connectivity} onChange={handleInputChange} sx={{ width: "100%", marginBottom: "2%" }} />
          <TextField placeholder='Price' name="price" value={addProduct.price} onChange={handleInputChange} type="number" sx={{ width: "100%", marginBottom: "2%" }} />
          <div>
            <input type="file" id="image" name="image" onChange={handleImageChange} ref={fileInput} disabled={disabled} />
            <div style={{ margin: "2%" }}>
              {addProduct.image && <img src={addProduct.image} alt="SelectedImage" height={50} width={50} />}
              {addProduct.isUploading && <div><ThreeDotsLoader/></div>}
              {addProduct.image && (
                <Button
                  onClick={handleReset}
                  sx={{
                    color: "black",
                    backgroundColor: "#faf0e680",
                    "&:hover": { backgroundColor: "linen" },
                    marginLeft: "10px",
                    minWidth: "35px",
                  }}
                >
                  <ClearIcon />
                </Button>
              )}
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
            disabled={addProduct.isUploading}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}