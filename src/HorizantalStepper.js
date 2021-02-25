import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import white from '@material-ui/core/colors/';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui';
import { StepConnector } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: 500,

  // },
 

  margin: {
    height: theme.spacing(3),
  },
 
}));
const CustomSlider = withStyles(theme=>({
  root: {
      color: 'rgba(103, 192, 103, 0.75)',
      height: 3,
      padding: "13px 0",
     
  },
  markLabelActive: {
    color: "#fff"
  },
  track: {
      height: 4,
      borderRadius: 2,
  },
  thumb: {
      height: 20,
      width: 20,
      // backgroundColor: 'rgba(103, 192, 103, 0.75)',
      border: "1px solid currentColor",
      marginTop: -9,
      marginLeft: -11,
      boxShadow: "#7FFFD4 0 2px 2px",
      "&:focus, &:hover, &$active": {
          boxShadow: "#ccc 0 2px 3px 1px",
      
     
      },
      
      
      color: 'rgba(103, 192, 103, 0.75)',
  },
}))(Slider);

const marks = [
  {
    value: 0,
    label: '5,000',
  },
  {
    value: 20,
    label: '12,500',
  },
  {
    value: 37,
    label: '27,500',
  },
  {
    value: 100,
    label: '35,000',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function HorizantalStepper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style={{color:"#fff"}} id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      
      <CustomSlider 
    
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        markLabelActive={"#fff"}
        marks={marks}
       
      />
    </div>
  );
}
