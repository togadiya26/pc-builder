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
import { Link, useNavigate } from 'react-router-dom';
import ColorRingLoader from '../Loader/ColorRingLoader';

export default function Admin() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [load, setLoad] = React.useState(false)

    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const validation = () => {
    //     if (!/\S+@\S+\.\S+/.test(email)) {
    //         alert("Please enter a valid email address");
    //         return;
    //     }
        
    //     if (password.length < 8) {
    //         alert("Password must be at least 8 characters long");
    //         return;
    //     }        
    // }

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoad(true)

        const url = 'https://pc-builder-backend-git-main-togadiya123.vercel.app/auth/login';
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };
        const response = await fetch(url, options);
        const data = await response.json();

        setLoad(true)

        localStorage.setItem("token", JSON.stringify(data.token));

        navigate("/dashboard");
    }


    return (
        <React.Fragment>
            <div className={style.loginDiv}>
                <Card sx={{ padding: "10px 0 30px 0", maxWidth: "450px", width: "100%", margin: "0 20px", background: "#00008b6e", fontFamily: 'Gentium Book Plus' }}>
                    {load && <div className={style.loadingSpinner}>
                        <ColorRingLoader />
                    </div>}
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}>
                        <Typography sx={{ fontSize: "x-large", color: 'aliceblue' }}>
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
                            sx={{ width: '100%', padding: "7px", outLine: 'none', color: 'aliceblue' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Typography sx={{ fontSize: "x-large", color: 'aliceblue' }}>
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
                                            sx={{color: 'aliceblue'}}
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
                            sx={{ width: '100%', padding: "7px", outLine: 'none', color: 'aliceblue' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", padding: "0%" }}>
                        <Button
                            sx={{
                                color: "aliceblue",
                                backgroundColor: "#00008bbf",
                                '&:hover': { backgroundColor: 'darkblue' },
                            }}
                            onClick={handleLogin}
                        ><LoginIcon /></Button>
                        <Typography sx={{ marginLeft: "10%" }}>
                            <Link to='/signUp' style={{ color: "aliceblue" }}>Create a new User</Link>
                        </Typography>
                    </CardActions>
                </Card>
            </div>
        </React.Fragment>
    );
}