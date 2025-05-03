import React from 'react';
import { Button } from '@mui/material';
function ButtonC({ size, color, text, action }) {
  
  return (
    <Button size={size} color={color} onClick={action}>
      {text}
    </Button>
  );
}

export default ButtonC;
