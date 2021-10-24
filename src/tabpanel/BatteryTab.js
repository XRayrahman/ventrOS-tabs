import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import GraphCard from '../component/graphCard';
import BatteryPercent from '../component/batteryPercent';
const ItemCard = styled(Card)(({ theme }) => ({
    ...theme.typography.h5,
    padding: theme.spacing(5,5),
    //textAlign: 'center',
    //height:'15ch',
    borderRadius:10,
    color: theme.palette.primary.main,
    outlineColor: theme.palette.secondary.main,
  }));
function BatteryTabs(props) {
    const {data} = props;
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return(
    <Stack spacing={3}>
        <BatteryPercent value={progress} />

        <Stack direction="row" spacing={{sm:5 ,md:10}} sx={{flexGrow:1}}>
            <ItemCard variant="outlined">
            CELL 1
            </ItemCard>
            <ItemCard variant="outlined">
            CELL 2
            </ItemCard>
            <ItemCard variant="outlined">
            CELL 3
            </ItemCard>
            <ItemCard variant="outlined">
            CELL 4
            </ItemCard>
        </Stack>
        <GraphCard label="SOC" body="State of Charge"/>
        <GraphCard data={data} label="Current Discharge"/>
        <ItemCard>

        </ItemCard>
    </Stack>
    );
}

export default withTheme(BatteryTabs);