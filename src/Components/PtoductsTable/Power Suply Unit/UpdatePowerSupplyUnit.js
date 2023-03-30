import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../Firebase/Firebase";
import { getPowerSupplyUnit } from "../../API/Api";
import ThreeDotsLoader from "../../Loader/ThreeDotsLoader";

export default function UpdatePowersupplyunit(props) {
  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState({
    productname: "",
    price: "",
    image: null,
    power: "",
    acinput: "",
    isUploading: false,
  });
  const [disabled, setDisabled] = React.useState(false);
  const fileInput = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
    if (props.sP.length !== 0 && props.index !== undefined) {
      setAddProduct({
        productname: props.sP[props.index]?.productname || "",
        price: props.sP[props.index]?.price || "",
        image: props.sP[props.index]?.image || null,
        power: props.sP[props.index]?.power || "",
        acinput: props.sP[props.index]?.acinput || "",
      });
      setDisabled(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "price" && isNaN(value)) {
      return; // do nothing if value is not a number
    }
    setAddProduct({ ...addProduct, [name]: value });
  };

  const Validation = () => {
    if (addProduct.productname === "") {
      alert("please enter product name...");
      return false;
    } else if (addProduct.price === "") {
      alert("please enter amount...");
      return false;
    } else if (addProduct.image === null) {
      alert("please upload an image...");
      return false;
    } else if (addProduct.power === null) {
      alert("please enter power...");
      return true;
    } else if (addProduct.acinput === null) {
      alert("please enter acinput...");
      return true;
    } else {
      return true;
    }
  };

  const dataToSend = {
    productname: addProduct.productname,
    price: addProduct.price,
    image: addProduct.image,
    power: addProduct.power,
    acinput: addProduct.acinput,
  };

  const handleUpdate = async (e) => {
    const token = JSON.parse(localStorage.getItem("token"));

    e.preventDefault();

    if (Validation()) {
      try {
        const response = await axios.put(
          `https://pc-builder-backend-git-main-togadiya123.vercel.app/item/updatepowersupplyunit/${props.id}`,
          dataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        alert("Powersupplyunit Updated successfully!");
      } catch (error) {
        console.log(error);
        alert("Error occurred while updating Powersupplyunit.");
      }

      const PowerSupplyUnitData = await getPowerSupplyUnit();
      props.sSP(PowerSupplyUnitData);
    }

    setOpen(false);
    setDisabled(false);
  };

  function handleImageChange(event) {
    const fileInput = document.getElementById("image");

    // Generate a random string to append to the file name
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `${randomString}_${fileInput.files[0].name}`;
    // Upload file to Firebase Storage
    const storageRef = ref(storage, `/Powersupplyunit/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, fileInput.files[0]);

    // Update state to indicate that the image is currently being uploaded
    setAddProduct({ ...addProduct, isUploading: true });

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        setAddProduct({
          ...addProduct,
          isUploading: false,
          image: downloadURL,
        });
      }
    );
  }

  function handleReset() {
    setAddProduct({ ...addProduct, image: null });
    setDisabled(false);

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  }

  return (
    <div>
      <Button
        sx={{
          color: "green",
          minWidth: "50px",
          backgroundColor: "#00008b6e",
          "&:hover": { backgroundColor: "darkblue" },
          marginLeft: "10px",
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "aliceblue" }}>
          Update Product
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "aliceblue" }}>
          <TextField
            placeholder="product name"
            name="productname"
            value={addProduct.productname}
            onChange={handleInputChange}
            sx={{ width: "100%", marginBottom: "2%" }}
          />
          <TextField
            placeholder="power"
            name="power"
            value={addProduct.power}
            onChange={handleInputChange}
            sx={{ width: "100%", marginBottom: "2%" }}
          />
          <TextField
            placeholder="AC input"
            name="acinput"
            value={addProduct.acinput}
            onChange={handleInputChange}
            sx={{ width: "100%", marginBottom: "2%" }}
          />
          <TextField
            placeholder="Price"
            name="price"
            value={addProduct.price}
            onChange={handleInputChange}
            type="text"
            sx={{ width: "100%", marginBottom: "2%" }}
          />
          <div>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              ref={fileInput}
              disabled={disabled}
              style={{ display: "none" }}
            />
            <div
              style={{ margin: "2%", display: "flex", alignItems: "center" }}
            >
              {addProduct.image && (
                <img
                  src={addProduct.image}
                  alt="SelectedImage"
                  height={50}
                  width={50}
                />
              )}
              {addProduct.isUploading && (
                <div>
                  <ThreeDotsLoader />
                </div>
              )}
              {addProduct.image && (
                <>
                  <Button
                    onClick={handleReset}
                    sx={{
                      color: "aliceblue",
                      backgroundColor: "#00008b6e",
                      "&:hover": { backgroundColor: "darkblue" },
                      marginLeft: "10px",
                      minWidth: "35px",
                    }}
                  >
                    <ClearIcon />
                  </Button>
                </>
              )}
              {!addProduct.image && !addProduct.isUploading && (
                <Button
                  onClick={() => {
                    document.getElementById("image").click();
                  }}
                  sx={{
                    color: "aliceblue",
                    backgroundColor: "#00008b6e",
                    "&:hover": { backgroundColor: "darkblue" },
                  }}
                >
                  Upload Image
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "aliceblue" }}>
          <Button
            sx={{
              color: "aliceblue",
              backgroundColor: "#00008b6e",
              "&:hover": { backgroundColor: "darkblue" },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "aliceblue",
              backgroundColor: "#00008b6e",
              "&:hover": { backgroundColor: "darkblue" },
            }}
            onClick={handleUpdate}
            disabled={addProduct.isUploading}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
