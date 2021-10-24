import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboutCard from './component/aboutCard';
import ConditionTabs from './tabpanel/ConditionTab';
import BatteryTabs from './tabpanel/BatteryTab';
import MotorTabs from './tabpanel/MotorTab';
import ControllerTabs from './tabpanel/ControllerTab';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function FullWidthTabs() {
  const state = {
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
    ],
    data2: [
      {
        name: 'Page A',
        uv: 2120,
        pv: 1300,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 4000,
        pv: 3218,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 4000,
        pv: 2218,
        amt: 2210,
      },
    ],
    label1:'Test',
    label2:'Test2'
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const {data,data2,label1,label2} = state;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <Box sx={{ bgcolor: 'background.paper', flexGrow:1}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Condition" {...a11yProps(0)} />
          <Tab label="Battery" {...a11yProps(1)} />
          <Tab label="Motor" {...a11yProps(2)} />
          <Tab label="Controller" {...a11yProps(3)} />
          <Tab label="About" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ConditionTabs data={data} data2={data2} label1={label1} label2={label2}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BatteryTabs />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MotorTabs data={data2}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ControllerTabs />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <AboutCard version="2.1.0"/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
