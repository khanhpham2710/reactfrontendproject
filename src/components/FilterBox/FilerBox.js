import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function FilterBox(prop) {
  const { list, name, value, setValue } = prop;

  const handleChange = (event, value) => {
    setValue(value)
  };

  return (
    <Autocomplete
      disablePortal
      disableCloseOnSelect
      clearOnEscape
      blurOnSelect
      id="combo-box-demo"
      options={list}
      sx={{ width: 300 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label={value || name} />}
    />
  );
}
