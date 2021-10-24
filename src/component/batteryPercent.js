import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { withTheme } from '@mui/styles';

function BatteryPercent(props) {
  return (
    <Box sx={{ marginTop:7, marginBottom:10,position: 'relative', display: 'inline-flex' ,
    alignItems: 'center',
    justifyContent: 'center',}}>
      <CircularProgress 
        size={300} variant="determinate" {...props} color="primary"/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

BatteryPercent.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default withTheme(BatteryPercent);