import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './Auth.module.css'
import { getProcessor, getAccessories, getCabinet, getCabinetFan, getCooler, getGraphicsCard, getKeyboard, getMonitor, getMotherboard, getMouse, getPowerSupplyUnit, getRAM, getStorage1, getStorage2 } from '../API/Api';
// import { Accessories, Cabinet, CabinetFan, Cooler, GraphicsCard, Keyboard, Monitor, Motherboard, Mouse, PowerSupplyUnit, Processor, RAM, Storage1, Storage2 } from '../Array';
import DataTable from './DataTable'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Auth() {

  const [ Processor, setProcessor] = React.useState([]);
  const [ Motherboard, setMotherboard] = React.useState([]);
  const [ RAM, setRAM] = React.useState([]);
  const [ Cooler, setCooler] = React.useState([]);
  const [ Storage1, setStorage1] = React.useState([]);
  const [ Storage2, setStorage2] = React.useState([]);
  const [ GraphicsCard, setGraphicsCard] = React.useState([]);
  const [ PowerSupplyUnit, setPowerSupplyUnit] = React.useState([]);
  const [ Cabinet, setCabinet] = React.useState([]);
  const [ CabinetFan, setCabinetFan] = React.useState([]);
  const [ Monitor, setMonitor] = React.useState([]);
  const [ Keyboard, setKeyboard] = React.useState([]);
  const [ Mouse, setMouse] = React.useState([]);
  const [ Accessories, setAccessories] = React.useState([]);

  React.useEffect(() => {
    const fetchProcessorData = async () => {
      const ProcessorData = await getProcessor();
      setProcessor(ProcessorData);
    }
    fetchProcessorData();
  }, []);

  React.useEffect(() => {
    const fetchMotherboardData = async () => {
      const MotherboardData = await getMotherboard();
      setMotherboard(MotherboardData);
    }
    fetchMotherboardData();
  }, []);

  React.useEffect(() => {
    const fetchRAMData = async () => {
      const RAMData = await getRAM();
      setRAM(RAMData);
    }
    fetchRAMData();
  }, []);

  React.useEffect(() => {
    const fetchCoolerData = async () => {
      const CoolerData = await getCooler();
      setCooler(CoolerData);
    }
    fetchCoolerData();
  }, []);

  React.useEffect(() => {
    const fetchStorage1Data = async () => {
      const Storage1Data = await getStorage1();
      setStorage1(Storage1Data);
    }
    fetchStorage1Data();
  }, []);

  React.useEffect(() => {
    const fetchStorage2Data = async () => {
      const Storage2Data = await getStorage2();
      setStorage2(Storage2Data);
    }
    fetchStorage2Data();
  }, []);

  React.useEffect(() => {
    const fetchGraphicsCardData = async () => {
      const GraphicsCardData = await getGraphicsCard();
      setGraphicsCard(GraphicsCardData);
    }
    fetchGraphicsCardData();
  }, []);

  React.useEffect(() => {
    const fetchPowerSupplyUnitData = async () => {
      const PowerSupplyUnitData = await getPowerSupplyUnit();
      setPowerSupplyUnit(PowerSupplyUnitData);
    }
    fetchPowerSupplyUnitData();
  }, []);

  React.useEffect(() => {
    const fetchCabinetData = async () => {
      const CabinetData = await getCabinet();
      setCabinet(CabinetData);
    }
    fetchCabinetData();
  }, []);

  React.useEffect(() => {
    const fetchCabinetFanData = async () => {
      const CabinetFanData = await getCabinetFan();
      setCabinetFan(CabinetFanData);
    }
    fetchCabinetFanData();
  }, []);

  React.useEffect(() => {
    const fetchMonitorData = async () => {
      const MonitorData = await getMonitor();
      setMonitor(MonitorData);
    }
    fetchMonitorData();
  }, []);

  React.useEffect(() => {
    const fetchKeyboardData = async () => {
      const KeyboardData = await getKeyboard();
      setKeyboard(KeyboardData);
    }
    fetchKeyboardData();
  }, []);

  React.useEffect(() => {
    const fetchMouseData = async () => {
      const MouseData = await getMouse();
      setMouse(MouseData);
    }
    fetchMouseData();
  }, []);

  React.useEffect(() => {
    const fetchAccessoriesData = async () => {
      const AccessoriesData = await getAccessories();
      setAccessories(AccessoriesData);
    }
    fetchAccessoriesData();
  }, []);

  const initialSelectedProduct = [];
  const [selectedProduct, setselectedProduct] = React.useState(initialSelectedProduct);
  const None = [];
  
  const handleChange = (event) => {
    setselectedProduct(event.target.value);
  };

  const navigate = useNavigate()

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/admin")
  }
  return (
    <React.Fragment>
      <div className={style.selectDiv}>
        <FormControl sx={{ width: "25%", marginTop: "2%" }} >
          <h3>Select Product:</h3>
          <Select
            value={selectedProduct}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              '& .MuiPaper-root': {
                height: '42%',
                backgroundColor: 'linen',
              }
            }}
          >
            <MenuItem value={None}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={Processor}>Processor</MenuItem>
            <MenuItem value={Motherboard}>Motherboard</MenuItem>
            <MenuItem value={Cooler}>Cooler</MenuItem>
            <MenuItem value={RAM}>RAM</MenuItem>
            <MenuItem value={Storage1}>Storage 1</MenuItem>
            <MenuItem value={Storage2}>Storage 2</MenuItem>
            <MenuItem value={GraphicsCard}>Graphics Card</MenuItem>
            <MenuItem value={PowerSupplyUnit}>Power Supply Unit</MenuItem>
            <MenuItem value={Cabinet}>Cabinet</MenuItem>
            <MenuItem value={CabinetFan}>Cabinet Fan</MenuItem>
            <MenuItem value={Monitor}>Monitor</MenuItem>
            <MenuItem value={Keyboard}>Keyboard</MenuItem>
            <MenuItem value={Mouse}>Mouse</MenuItem>
            <MenuItem value={Accessories}>Accessories</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.tableDiv}>
        <DataTable sP={selectedProduct} sSP={setselectedProduct} />
      </div>
      <div className={style.logoutDiv}>
        <Button sx={{ backgroundColor: "#faf0e680", '&:hover': { backgroundColor: 'linen' } }} onClick={LogOut}>LOGOUT</Button>
      </div>
    </React.Fragment>
  );
}