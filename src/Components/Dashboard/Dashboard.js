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
        <div style={{ fontSize: "larger" }}>
          Dashboard
        </div>
        <Button
          sx={{
            color: "aliceblue",
            backgroundColor: "darkblue",
            '&:hover': { backgroundColor: '#00008b6e' },
          }}
          onClick={LogOut}
        >
          LOGOUT
        </Button>
      </header>
      <div className={style.tableDiv}>
        <TabPanelFull />
      </div>
    </React.Fragment>
  );
}