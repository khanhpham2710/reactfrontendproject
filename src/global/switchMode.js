import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';
import { ModeContext } from './modeContext';


const SwitchMode = () => {
  const { toggleMode } = useContext(ModeContext)

  return (
    <div>
      <Switch onChange={toggleMode} />
    </div>
  );
};

export default SwitchMode;
