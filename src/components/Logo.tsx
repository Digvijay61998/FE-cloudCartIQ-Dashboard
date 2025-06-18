import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from '../assets/logo.png';

interface Logotype {
  disabledLink?: boolean,
  sx?: object,
};

export default function Logo({ disabledLink = false, sx }:Logotype) {
  const LOGO = (
      <Box component={'img'} src={logo} sx={{ objectFit: 'cover', width: 60, height: 50,}}/> 
  );

  if (disabledLink) {
    return <div>{LOGO}</div>;
  }

  return <RouterLink to="/">{LOGO}</RouterLink>;
}
