import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router'; // ✅ Correct import

function ButtonC({ size, color, text, action }) {
  const navigate = useNavigate();
  
  return (
    <Button size={size} color={color} onClick={action}>
      {text}
    </Button>
  );
}

export default ButtonC;
