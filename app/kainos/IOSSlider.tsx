import * as React from 'react';
import Slider, { SliderProps, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: '#007bff',
  height: 5,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
    },
    '&:before': {
      display: 'none',
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
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 5,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#d0d0d0',
  },
}));

const Page = () => {
  const [pages, setPages] = React.useState<number>(60);

  return (
    <Box sx={{ width: 320 }}>
      <Typography gutterBottom>iOS</Typography>
      <IOSSlider
        value={pages}
        onChange={(event, newValue) => setPages(newValue as number)}
        aria-label="pages slider"
        valueLabelDisplay="on"
        min={0}
        max={100}
      />
    </Box>
  );
};

export default Page;