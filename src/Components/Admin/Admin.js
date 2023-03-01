import * as React from 'react';
import style from './Admin.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';


export default function Admin() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={style.loginDiv}>
            <Card sx={{ height: "50%", width: "35%", background: "linen", fontFamily: 'Gentium Book Plus' }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}>
                    <Typography>
                        <h4>Admin ID</h4>
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
                    />
                    <Typography>
                        <h4>Password</h4>
                    </Typography>
                    <FormControl sx={{ width: "100%", padding: "7px" }} >
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
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
                            }
                            placeholder="Password"
                        />
                    </FormControl>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", padding: "0%" }}>
                    <Button sx={{
                        color: "black",
                        backgroundColor: "#deb88745",
                        '&:hover': { backgroundColor: 'burlywood' },
                    }}><LoginIcon /></Button>
                </CardActions>
            </Card>
        </div>
    );
}