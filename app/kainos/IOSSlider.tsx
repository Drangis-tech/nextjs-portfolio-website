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
          backgroundColor: '#007bff',
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          transform: 'translateY(-60%)',
          boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
          visibility: 'hidden',
          opacity: 0,
          transition: 'visibility 0s, opacity 0.3s linear',
          '&.MuiSlider-thumb:hover + &': {
            visibility: 'visible',
            opacity: 1,
          },
          '&.MuiSlider-thumb:focus + &': {
            visibility: 'visible',
            opacity: 1,
          },
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
  position: 'relative', // Ensure positioning context for pseudo-elements
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&:before': {
      boxShadow:
        '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: '#fff',
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: '#fff',
      ...theme.applyStyles('dark', {
        color: '#fff',
      }),
    },
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
  '& .MuiSlider-thumb::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    width: 24,
    height: 24,
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

export default IOSSlider;