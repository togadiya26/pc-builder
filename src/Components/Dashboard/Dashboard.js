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
      <header style={{ backgroundColor: '#3f51b5', padding: '1%', display: "flex", justifyContent: "space-between" }}>
        <div style={{fontSize: "larger"}}>
          Dashboard
        </div>
        <button  onClick={LogOut} style={{ backgroundColor: 'darkblue', color: 'aliceblue', padding: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>LOGOUT</button>
      </header>
      {/* <div className={style.logoutDiv}>
        <Button sx={{ backgroundColor: "#faf0e680", '&:hover': { backgroundColor: 'linen' } }} onClick={LogOut}>LOGOUT</Button>
      </div> */}
      <div className={style.tableDiv}>
        <TabPanelFull />
      </div>
    </React.Fragment>
  );
}