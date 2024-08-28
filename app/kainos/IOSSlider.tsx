import * as React from 'react';
import Slider, { SliderProps, SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Custom value label component for displaying the value above the thumb
function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const IOSSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  color: '#007bff', // Replace with your desired color
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    height: 8,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
      display: 'none',
    },
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(0)',
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundColor: '#007bff',
      boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
      opacity: 0,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    },
    '&:hover::after, &:focus::after': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1.2)',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#007bff',
    color: '#fff',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#d0d0d0',
  },
}));

export default IOSSlider;