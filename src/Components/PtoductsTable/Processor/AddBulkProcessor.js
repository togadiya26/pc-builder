import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { getProcessor } from '../../API/Api';


export default function AddBulkProcessor(props) {
    
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState(null);
    const [uploading, setUploading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const token = JSON.parse(localStorage.getItem('token'));

    const handleClickOpen = () => {
        setOpen(true);
        setFile(null);
        setDisabled(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setDisabled(true);
    };

    const handleResetFile = () => {
        setFile(null);
        setDisabled(false);
    };

    const handleUpload = async () => {
        try {
            setUploading(true);

            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                "https://pc-builder-backend-git-main-togadiya123.vercel.app/item/addprocessorfile",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                }
            );

            console.log("Upload successful", response);
            alert("Products added successfully!");
        } catch (error) {
            console.error("Error uploading file", error);
            alert("Error while uploading file...\nYou are uploading the wrong product file...");
        } finally {
            setUploading(false);
        }

        const ProcessorData = await getProcessor();
        props.sSP(ProcessorData);
    
        setOpen(false);

    };


    return (
        <div>
            <Button sx={{ backgroundColor: "#00008b6e", color: "aliceblue", '&:hover': { backgroundColor: 'darkblue' }, marginRight: "10px" }} onClick={handleClickOpen} disabled={props.load}>
                Add Bulk Products
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
                <DialogTitle sx={{ backgroundColor: "aliceblue" }} >Add Bulk Processor</DialogTitle>
                <DialogContent sx={{ backgroundColor: 'aliceblue' }}>
                    <div>
                        {file ? (
                            <div>
                                {file.name}
                                <Button
                                    sx={{
                                        color: 'aliceblue',
                                        backgroundColor: '#00008b6e',
                                        '&:hover': { backgroundColor: 'darkblue' },
                                        marginLeft: '10px',
                                    }}
                                    onClick={handleResetFile}
                                >
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <input type="file" accept=".csv,.xmla" id="myFileInput" disabled={disabled} onChange={handleFileChange} style={{ display: 'none' }} />
                                <Button
                                    sx={{
                                        color: 'aliceblue',
                                        backgroundColor: '#00008b6e',
                                        '&:hover': { backgroundColor: 'darkblue' },
                                    }}
                                    onClick={() => document.getElementById('myFileInput').click()}
                                >
                                    Upload File
                                </Button>
                            </div>
                        )}
                    </div>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "aliceblue" }}>
                    <Button
                        sx={{
                            color: "aliceblue",
                            backgroundColor: "#00008b6e",
                            '&:hover': { backgroundColor: 'darkblue' },
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        sx={{
                            color: "aliceblue",
                            backgroundColor: "#00008b6e",
                            '&:hover': { backgroundColor: 'darkblue' },
                        }}
                        onClick={handleUpload}
                        disabled={!file || uploading}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}