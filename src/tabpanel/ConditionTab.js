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
function ConditionTabs(props) {
    const {data,data2,label1,label2} = props;
    return(
    <Stack spacing={3}>
    {/* testing card disini */}
    <ItemCard variant='outlined'>
    </ItemCard>
    {/* label ga di parsing */}
    <GraphCard data={data2} label="GRAPH 1" body="Lorem Ipsum Dolor si Amet"/>
    {/* label di parsing */}
    <GraphCard data={data} label={label1}/>
    <GraphCard data={data} label={label2}/>
    </Stack>
    );
}

export default withTheme(ConditionTabs);