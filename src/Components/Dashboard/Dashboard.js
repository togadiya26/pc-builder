import * as React from 'react';
import style from './Auth.module.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TabPanelFull from './TabPanelFull';

export default function Dashboard() {

  const navigate = useNavigate()

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  return (
    <React.Fragment>
      <div className={style.tableDiv}>
        <TabPanelFull />
      </div>
      <div className={style.logoutDiv}>
        <Button sx={{ backgroundColor: "#faf0e680", '&:hover': { backgroundColor: 'linen' } }} onClick={LogOut}>LOGOUT</Button>
      </div>
    </React.Fragment>
  );
}