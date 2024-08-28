import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { useState } from 'react';

// Inline ValueLabelComponent
function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value, open } = props;

  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={value}
      open={open}
      arrow
    >
      <Box
        sx={{
          lineHeight: 1.2,
          fontSize: 16,
          width: 40,
          height: 40,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#007bff',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '&::before': {
            display: 'none',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        }}
      >
        {value}
      </Box>
    </Tooltip>
  );
}

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: '#007bff',
  height: 8,
  padding: '15px 0',
  position: 'relative',
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
    },
    '&::before': {
      boxShadow:
        '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 16,
    background: 'unset',
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#007bff',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 8,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#d0d0d0',
  },
  '& .MuiSlider-thumb::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    width: 28,
    height: 28,
    borderRadius: '50%',
    backgroundColor: '#007bff',
    boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  },
  '& .MuiSlider-thumb:hover::after, & .MuiSlider-thumb:focus::after': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.2)',
  },
  ...theme.applyStyles('dark', {
    color: '#0a84ff',
  }),
}));

// Component using the IOSSlider
const MyComponent = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <IOSSlider
      value={value}
      onChange={handleChange}
      aria-label="Custom slider"
      valueLabelDisplay="auto" // This makes the label appear on hover or while dragging
      components={{
        ValueLabel: ValueLabelComponent, // Use the custom ValueLabel component
      }}
      min={0}
      max={100}
    />
  );
};

export default MyComponent;