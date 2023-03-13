import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { storage } from '../../../Firebase/Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'


export default function AddStorage1(props) {

  const initialAddProduct = {
    // name: props.sP.length !== 0 && props.sP[0].name,
    item: "",
    price: "",
    img: null
  }

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
    if (addProduct.item === '') {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Validation()) {

      // Get the file input element
      const fileInput = document.getElementById("image");

      // Upload file to Firebase Storage
      const storageRef = ref(storage, `/Storage 1/${fileInput.files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, fileInput.files[0]);

      // Monitor the upload progress
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

          setAddProduct({ ...addProduct, img: downloadURL });

          // Update parent component state with new product data
          props.sSP([
            ...props.sP,
            { name: addProduct.name, item: addProduct.item, price: addProduct.price, img: downloadURL },
          ]);

        });

        try {
          const response = await axios.post(
            "https://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/addstorage1",
            {
              // name: name,
              // manufacturer: manufacturer,
              // coreCount: coreCount,
              // threadCount: threadCount,
              // baseClock: baseClock,
              // boostClock: boostClock,
              // tdp: tdp
            }
          );
    
          console.log(response);
          alert("Processor added successfully!");
        } catch (error) {
          console.log(error);
          alert("Error occurred while adding processor.");
        }

    }

    setAddProduct(initialAddProduct);
    setOpen(false);

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