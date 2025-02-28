import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = ({ color = 'primary', size = 40 }) => {
  return (
    <div className="flex justify-center items-center h-[250px]">
      <CircularProgress color={color} size={size} />
    </div>
  );
};

export default LoadingComponent;