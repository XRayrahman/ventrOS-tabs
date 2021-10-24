import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import GraphCard from '../component/graphCard';

const ItemCard = styled(Card)(({ theme }) => ({
    ...theme.typography.h5,
    padding: theme.spacing(5,5),
    //textAlign: 'center',
    //height:'15ch',
    borderRadius:10,
    //backgroundColor: theme.palette.primary.light,
    
  }));
function ControllerTabs(props) {
    const {data} = props;
    return(
    <Stack spacing={3}>
        <GraphCard data={data} label="Current Discharge"/>
        <ItemCard>

        </ItemCard>
        <ItemCard>

        </ItemCard>
    </Stack>
    );
}

export default withTheme(ControllerTabs);