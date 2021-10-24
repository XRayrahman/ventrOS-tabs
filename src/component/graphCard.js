import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { withTheme } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ItemCard = styled(Card)(({ theme }) => ({
    ...theme.typography.h5,
    padding: theme.spacing(5,5),
    //textAlign: 'center',
    //height:'15ch',
    borderRadius:10,
    //backgroundColor: theme.palette.primary.light,
    
  }));

function SimpleLineChart(props) {
    const { data } = props;
    return (
      <ResponsiveContainer width="99%" height={200}>
        <AreaChart data={data} 
            width={500}
            height={400}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="pv" stroke="#8854fd" fill="#8884d8" activeDot={{ r: 8 }} />
            {/* <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d"/> */}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  
function GraphCard(props){
    const {data,label,body} = props;
    return (
      <ItemCard elevation={16} >
        <Grid container spacing={1}>
          <Grid Item xs={5} md={3} spacing={5} marginBottom={5}>
            <Typography variant="h5" fontWeight='bold' gutterBottom>{label}</Typography>
            <Typography variant="body1">{body}</Typography>
          </Grid>
          <Grid Item xs={15} md={9} spacing={3}>
            {/* <Card elevation={16}> */}
              <SimpleLineChart data={data}/>
            {/* </Card> */}
          </Grid>
        </Grid>
      </ItemCard>
    )
  }

  export default withTheme(GraphCard);