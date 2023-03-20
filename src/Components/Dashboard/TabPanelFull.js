import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProcessorTable from '../PtoductsTable/Processor/ProcessorTable';
import MotherboardTable from '../PtoductsTable/Motherboard/MotherboardTable';
import RamTable from '../PtoductsTable/RAM/RamTable';
import CoolerTable from '../PtoductsTable/Cooler/CoolerTable';
import Storage1Table from '../PtoductsTable/Storage 1/Storage1Table';
import Storage2Table from '../PtoductsTable/Storage 2/Storage2Table';
import GraphicsCardTable from '../PtoductsTable/Graphics Card/GraphicsCardTable';
import PowerSupplyUnitTable from '../PtoductsTable/Power Suply Unit/PowerSupplyUnitTable';
import CabinetTable from '../PtoductsTable/Cabinet/CabinetTable';
import CabinetFanTable from '../PtoductsTable/Cabinet Fan/CabinetFanTable';
import MonitorTable from '../PtoductsTable/Monitor/MonitorTable';
import KeyboardTable from '../PtoductsTable/Keyboard/KeyboardTable';
import MouseTable from '../PtoductsTable/Mouse/MouseTable';
import AccessoriesTable from '../PtoductsTable/Accessories/AccessoriesTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="scrollable force tabs example" variant="scrollable" scrollButtons allowScrollButtonsMobile>
          <Tab label="Processor" {...a11yProps(0)} />
          <Tab label="Motherboard" {...a11yProps(1)} />
          <Tab label="RAM" {...a11yProps(2)} />
          <Tab label="Cooler" {...a11yProps(3)} />
          <Tab label="Storage 1" {...a11yProps(4)} />
          <Tab label="Storage 2" {...a11yProps(5)} />
          <Tab label="Graphics Card" {...a11yProps(6)} />
          <Tab label="Power Supply Unit" {...a11yProps(7)} />
          <Tab label="Cabinet" {...a11yProps(8)} />
          <Tab label="Cabinet Fan" {...a11yProps(9)} />
          <Tab label="Monitor" {...a11yProps(10)} />
          <Tab label="Keyboard" {...a11yProps(11)} />
          <Tab label="Mouse" {...a11yProps(12)} />
          <Tab label="Accessories" {...a11yProps(13)} />
        </Tabs>
      </Box>
        <TabPanel value={value} index={0} >
          <ProcessorTable />
        </TabPanel>
        <TabPanel value={value} index={1} >
          <MotherboardTable />
        </TabPanel>
        <TabPanel value={value} index={2} >
          <RamTable />
        </TabPanel>
        <TabPanel value={value} index={3} >
          <CoolerTable />
        </TabPanel>
        <TabPanel value={value} index={4} >
          <Storage1Table />
        </TabPanel>
        <TabPanel value={value} index={5} >
          <Storage2Table />
        </TabPanel>
        <TabPanel value={value} index={6} >
          <GraphicsCardTable />
        </TabPanel>
        <TabPanel value={value} index={7} >
          <PowerSupplyUnitTable />
        </TabPanel>
        <TabPanel value={value} index={8} >
          <CabinetTable />
        </TabPanel>
        <TabPanel value={value} index={9} >
          <CabinetFanTable />
        </TabPanel>
        <TabPanel value={value} index={10} >
          <MonitorTable />
        </TabPanel>
        <TabPanel value={value} index={11} >
          <KeyboardTable />
        </TabPanel>
        <TabPanel value={value} index={12} >
          <MouseTable />
        </TabPanel>
        <TabPanel value={value} index={13} >
          <AccessoriesTable />
        </TabPanel>
    </Box>
  );
}