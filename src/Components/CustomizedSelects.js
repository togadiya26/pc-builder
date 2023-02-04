import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/material';
import {Button} from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import { Cabinet, CoolingSystem, Graphics, Monitor, Motherboard, OS, Power, Processor, Ram, UPs, SSD, HDD } from './Array';


export default function CustomizedSelects() {
  
  const Options = {
    Processor: '',
    Motherboard: '',
    CoolingSystem: '',
    Ram: '',
    SSD: '',
    HDD: '',
    Graphics: '',
    Power: '',
    Cabinet: '',
    Monitor: '',
    OS: '',
    UPs: ''
  }

  const initialQty = {
    ProcessorQty: '1',
    MotherboardQty: '1',
    CoolingSystemQty: '1',
    SSDQty: '1',
    RamQty: '',
    HDDQty: '',
    GraphicsQty: '1',
    PowerQty: '1',
    CabinetQty: '1',
    MonitorQty: '1',
    OSQty: '1',
    UPsQty: '1'
  }


const [selectedOption, setSelectedOption] = React.useState(Options);
const [qty, setQty] = React.useState(initialQty);


const navigate = useNavigate()

  const handleChange = (event) => {
    setSelectedOption({
      ...selectedOption,
      [event.target.name] : event.target.value
  })
  };

  const handleQty = (event) => {
    setQty({
      ...qty,
      [event.target.name] : event.target.value
  })
  };

  const state = {data:selectedOption, Quantity: qty }

  return (
    <React.Fragment>
    <Card
    sx={{
    maxWidth:"100%",
    backgroundColor: "black",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
    }}
    >
    <Card
    sx={{
    maxWidth:"50%",
    backgroundColor:"black",
    marginTop:"100px"
    }}
    >
    <img src='https://www.ant-pc.com/Case/build_from_scratch.png' alt='pc' height="80%" width="80%"/>
    </Card>
    <Card 
    variant="outlined" 
    className='container' 
    sx={{ 
    maxWidth: "40%", 
    display: "inline-block",
    // width: "-webkit-fill-available",
    margin: "15px",
    marginTop: "75px",
    backgroundColor: "#242424"
    }}
    >
      <div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Processor</b></FormLabel>
        <Select
          value={selectedOption.Processor}
          name="Processor"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Processor.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Processor}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Motherboard</b></FormLabel>
        <Select
          value={selectedOption.Motherboard}
          name="Motherboard"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {selectedOption.Processor !== "" && Motherboard.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Motherboard}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>CoolingSystem</b></FormLabel>
        <Select
          value={selectedOption.CoolingSystem}
          name="CoolingSystem"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {CoolingSystem.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.CoolingSystem}</MenuItem>
           ))}
        </Select>
      </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>SSD</b></FormLabel>
        <Select
          value={selectedOption.SSD}
          name="SSD"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {SSD.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.SSD}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Ram</b></FormLabel>
        <Select
          value={selectedOption.Ram}
          name="Ram"
          onChange={handleChange}
          displayEmpty
          sx={{width:"180px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "180px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Ram.map((option, index) => (
          <MenuItem sx={{width: "180px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Ram}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1}}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Qty</b></FormLabel>
        <Select
          value={qty.RamQty}
          name="RamQty"
          onChange={handleQty}
          displayEmpty
          sx={{width:"40px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="1">1</MenuItem>
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="2">2</MenuItem> 
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="3">3</MenuItem> 
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="4">4</MenuItem>
          </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>HDD</b></FormLabel>
        <Select
          value={selectedOption.HDD}
          name="HDD"
          onChange={handleChange}
          displayEmpty
          sx={{width:"180px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "180px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {HDD.map((option, index) => (
          <MenuItem sx={{width: "180px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.HDD}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1}}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Qty</b></FormLabel>
        <Select
          value={qty.HDDQty}
          name="HDDQty"
          onChange={handleQty}
          displayEmpty
          sx={{width:"40px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="1">1</MenuItem>
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="2">2</MenuItem>
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="3">3</MenuItem> 
          <MenuItem sx={{width: "40px", whiteSpace:"normal", font: "menu"}} value="4">4</MenuItem>
          </Select>
      </FormControl>
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Graphics</b></FormLabel>
        <Select
          value={selectedOption.Graphics}
          name="Graphics"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Graphics.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Graphics}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Power</b></FormLabel>
        <Select
          value={selectedOption.Power}
          name="Power"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Power.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Power}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Cabinet</b></FormLabel>
        <Select
          value={selectedOption.Cabinet}
          name="Cabinet"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Cabinet.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Cabinet}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>Monitor</b></FormLabel>
        <Select
          value={selectedOption.Monitor}
          name="Monitor"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {Monitor.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.Monitor}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>OS</b></FormLabel>
        <Select
          value={selectedOption.OS}
          name="OS"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {OS.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.OS}</MenuItem>
           ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormLabel sx={{color:'white', alignSelf:"baseline"}}><b>UPs</b></FormLabel>
        <Select
          value={selectedOption.UPs}
          name="UPs"
          onChange={handleChange}
          displayEmpty
          sx={{width:"240px", color:"white", border:"1px solid white", height:"35px", textAlignLast:"left"}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} value="">
            <em>None</em>
          </MenuItem>
          {UPs.map((option, index) => (
          <MenuItem sx={{width: "240px", whiteSpace:"normal", font: "menu"}} key={index} value={option.id}>{option.UPs}</MenuItem>
           ))}
        </Select>
      </FormControl>
      </div>
      <div>
    <Button variant="contained" sx={{backgroundColor:"#ff0303de", boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 23%), 0px 2px 2px 0px #f8f9fa, 0px 1px 5px 0px rgb(255 54 54 / 12%)", color:"rgb(0 0 0 / 87%)", marginBottom:"5px"}} onClick={() => navigate(`/Bill1`, {state})}>
        VIEW IN TABLE
    </Button>
    </div>
    </div>
    </Card>
    </Card>
    </React.Fragment>
  );
}