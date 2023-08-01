import React from 'react';
import {Typography} from '@mui/material';

const TypographyComponent = ({ className, text, component }) => {
  return (
    <Typography className={className} component={component}>
      {text}
    </Typography>
  );
};

export default TypographyComponent;