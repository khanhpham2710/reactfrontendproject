import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MyBreadCrumbs({ filter }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/home" component={RouterLink}> 
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/top"
          component={RouterLink}
        >
          Top Animes
        </Link>
        {filter && <Typography color="text.primary">{filter.charAt(0).toUpperCase() + filter.slice(1)}</Typography>}
      </Breadcrumbs>
    </div>
  );
}