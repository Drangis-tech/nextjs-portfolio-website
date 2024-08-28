import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// Custom value label component for displaying the value above the thumb
function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
          backgroundColor: '#007bff', // Blue color for the value label
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          transform: 'translateY(-60%)',
          boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
          visibility: 'hidden',
          opacity: 0,
          transition: 'visibility 0s, opacity 0.3s linear',
        }}
      >
        {value}
      </Box>
    </Tooltip>
  );
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: '#007bff',
  height: 5,
  padding: '15px 0',
  position: 'relative',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 123, 255, 0.3)', // Light blue color
      boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
      opacity: 0,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      pointerEvents: 'none',
    },
  },
  '& .MuiSlider-thumb:hover::after, & .MuiSlider-thumb:focus::after': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.2)',
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 5,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#d0d0d0',
  },
  ...theme.applyStyles('dark', {
    color: '#0a84ff',
  }),
}));

export default IOSSlider;