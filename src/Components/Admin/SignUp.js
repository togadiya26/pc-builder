import * as React from 'react';
import style from './Admin.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/Firebase';

export default function SignUp() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     const url = 'http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/signup';
    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password })
    //     };
    //     const response = await fetch(url, options);
    //     const data = await response.json();
    //     console.log(data);

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             navigate("/admin")
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    //         setEmail("")
    //         setPassword("")
    // }

    const handleLogin = async (e) => {
        e.preventDefault();
      
        const url = 'http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/signup';
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // User account created successfully
            navigate("/admin");
          })
          .catch((error) => {
            // Error creating user account
            console.log(error);
          });
      
        setEmail("");
        setPassword("");
      }

    return (
        <div className={style.loginDiv}>
            <Card sx={{ height: "50%", width: "35%", background: "linen", fontFamily: 'Gentium Book Plus' }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}>
                    <Typography sx={{ fontSize: "x-large" }}>
                        Admin ID
                    </Typography>
                    <TextField
                        placeholder="Admin ID"
                        id="outlined-start-adornment"
                        InputProps={{
                            classes: {
                                notchedOutline: style.notchedOutline
                            }
                        }}
                        sx={{ width: '100%', padding: "7px", outLine: 'none' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Typography sx={{ fontSize: "x-large" }}>
                        Password
                    </Typography>
                    <TextField
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            classes: {
                                notchedOutline: style.notchedOutline
                            }
                        }}
                        placeholder="Password"
                        sx={{ width: '100%', padding: "7px", outLine: 'none' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </CardContent>
                <CardActions sx={{ justifyContent: "center", padding: "0%" }}>
                    <Button
                        sx={{
                            color: "black",
                            backgroundColor: "#deb88745",
                            '&:hover': { backgroundColor: 'burlywood' },
                        }}
                        onClick={handleLogin}
                    ><LoginIcon /></Button>
                </CardActions>
            </Card>
        </div>
    );
}