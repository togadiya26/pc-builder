import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './Auth.module.css'
import { Accessories, Cabinet, CabinetFan, Cooler, GraphicsCard, Keyboard, Monitor, Motherboard, Mouse, PowerSupplyUnit, Processor, RAM, Storage1, Storage2 } from '../Array';
import DataTable from './DataTable';

export default function Auth() {

  const initialSelectedProduct = [];

  const initialAllProduct = {
    Processor: Processor,
    Motherboard: Motherboard,
    Cooler: Cooler,
    RAM: RAM,
    Storage1: Storage1,
    Storage2: Storage2,
    GraphicsCard: GraphicsCard,
    PowerSupplyUnit: PowerSupplyUnit,
    Cabinet: Cabinet,
    CabinetFan: CabinetFan,
    Monitor: Monitor,
    Keyboard: Keyboard,
    Mouse: Mouse,
    Accessories: Accessories
  }

  const [allProduct, setAllProduct] = React.useState(initialAllProduct)
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
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={allProduct.Processor}>Processor</MenuItem>
            <MenuItem value={allProduct.Motherboard}>Motherboard</MenuItem>
            <MenuItem value={allProduct.Cooler}>Cooler</MenuItem>
            <MenuItem value={allProduct.RAM}>RAM</MenuItem>
            <MenuItem value={allProduct.Storage1}>Storage 1</MenuItem>
            <MenuItem value={allProduct.Storage2}>Storage 2</MenuItem>
            <MenuItem value={allProduct.GraphicsCard}>Graphics Card</MenuItem>
            <MenuItem value={allProduct.PowerSupplyUnit}>Power Supply Unit</MenuItem>
            <MenuItem value={allProduct.Cabinet}>Cabinet</MenuItem>
            <MenuItem value={allProduct.CabinetFan}>Cabinet Fan</MenuItem>
            <MenuItem value={allProduct.Monitor}>Monitor</MenuItem>
            <MenuItem value={allProduct.Keyboard}>Keyboard</MenuItem>
            <MenuItem value={allProduct.Mouse}>Mouse</MenuItem>
            <MenuItem value={allProduct.Accessories}>Accessories</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.tableDiv}>
        <DataTable sP={selectedProduct} sAP={setAllProduct} sSP={setselectedProduct} />
      </div>
    </React.Fragment>
  );
}