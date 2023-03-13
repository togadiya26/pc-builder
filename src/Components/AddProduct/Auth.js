import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './Auth.module.css'
import { getProcessor, getAccessories, getCabinet, getCabinetFan, getCooler, getGraphicsCard, getKeyboard, getMonitor, getMotherboard, getMouse, getPowerSupplyUnit, getRAM, getStorage1, getStorage2 } from '../API/LoginAPI';
// import { Accessories, Cabinet, CabinetFan, Cooler, GraphicsCard, Keyboard, Monitor, Motherboard, Mouse, PowerSupplyUnit, Processor, RAM, Storage1, Storage2 } from '../Array';
import DataTable from './DataTable';

export default function Auth() {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDA2YzVkZDIwYjQ1OGJjMWIxZDg2OGEiLCJpYXQiOjE2Nzg0MzEyODQsImV4cCI6MTY3ODg2MzI4NH0.sBkW3SpflOto9jl0OcO0pDDtvPic5gBzvjaB80wS-Dw';


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
      const ProcessorData = await getProcessor(token);
      setProcessor(ProcessorData.message);
    }
    fetchProcessorData();
  }, []);

  React.useEffect(() => {
    const fetchMotherboardData = async () => {
      const MotherboardData = await getMotherboard(token);
      setMotherboard(MotherboardData.message);
    }
    fetchMotherboardData();
  }, []);

  React.useEffect(() => {
    const fetchRAMData = async () => {
      const RAMData = await getRAM(token);
      setRAM(RAMData.message);
    }
    fetchRAMData();
  }, []);

  React.useEffect(() => {
    const fetchCoolerData = async () => {
      const CoolerData = await getCooler(token);
      setCooler(CoolerData.message);
    }
    fetchCoolerData();
  }, []);

  React.useEffect(() => {
    const fetchStorage1Data = async () => {
      const Storage1Data = await getStorage1(token);
      setStorage1(Storage1Data.message);
    }
    fetchStorage1Data();
  }, []);

  React.useEffect(() => {
    const fetchStorage2Data = async () => {
      const Storage2Data = await getStorage2(token);
      setStorage2(Storage2Data.message);
    }
    fetchStorage2Data();
  }, []);

  React.useEffect(() => {
    const fetchGraphicsCardData = async () => {
      const GraphicsCardData = await getGraphicsCard(token);
      setGraphicsCard(GraphicsCardData.message);
    }
    fetchGraphicsCardData();
  }, []);

  React.useEffect(() => {
    const fetchPowerSupplyUnitData = async () => {
      const PowerSupplyUnitData = await getPowerSupplyUnit(token);
      setPowerSupplyUnit(PowerSupplyUnitData.message);
    }
    fetchPowerSupplyUnitData();
  }, []);

  React.useEffect(() => {
    const fetchCabinetData = async () => {
      const CabinetData = await getCabinet(token);
      setCabinet(CabinetData.message);
    }
    fetchCabinetData();
  }, []);

  React.useEffect(() => {
    const fetchCabinetFanData = async () => {
      const CabinetFanData = await getCabinetFan(token);
      setCabinetFan(CabinetFanData.message);
    }
    fetchCabinetFanData();
  }, []);

  React.useEffect(() => {
    const fetchMonitorData = async () => {
      const MonitorData = await getMonitor(token);
      setMonitor(MonitorData.message);
    }
    fetchMonitorData();
  }, []);

  React.useEffect(() => {
    const fetchKeyboardData = async () => {
      const KeyboardData = await getKeyboard(token);
      setKeyboard(KeyboardData.message);
    }
    fetchKeyboardData();
  }, []);

  React.useEffect(() => {
    const fetchMouseData = async () => {
      const MouseData = await getMouse(token);
      setMouse(MouseData.message);
    }
    fetchMouseData();
  }, []);

  React.useEffect(() => {
    const fetchAccessoriesData = async () => {
      const AccessoriesData = await getAccessories(token);
      setAccessories(AccessoriesData.message);
    }
    fetchAccessoriesData();
  }, []);

  console.log(Processor)

  const initialSelectedProduct = [];

  // const initialAllProduct = {
  //   Processor: Processor,
  //   Motherboard: Motherboard,
  //   Cooler: Cooler,
  //   RAM: RAM,
  //   Storage1: Storage1,
  //   Storage2: Storage2,
  //   GraphicsCard: GraphicsCard,
  //   PowerSupplyUnit: PowerSupplyUnit,
  //   Cabinet: Cabinet,
  //   CabinetFan: CabinetFan,
  //   Monitor: Monitor,
  //   Keyboard: Keyboard,
  //   Mouse: Mouse,
  //   Accessories: Accessories
  // }

  // const [allProduct, setAllProduct] = React.useState(initialAllProduct)
  const [selectedProduct, setselectedProduct] = React.useState(initialSelectedProduct);

  const handleChange = (event) => {
    setselectedProduct(event.target.value);
  };

  console.log(selectedProduct)

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
            <MenuItem value={[]}>
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
    </React.Fragment>
  );
}