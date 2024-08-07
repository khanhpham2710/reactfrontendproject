import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';
import { ModeContext } from '../../global/modeContext/modeContext';

const SwitchMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ModeContext);

  return (
    <div>
      <Switch 
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default SwitchMode;
