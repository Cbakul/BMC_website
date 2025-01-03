import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ marginTop: '20px' }}>
      <Toolbar>
        <Typography variant="body1" style={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} BMC Medicolegal Solutions. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Pune, Maharashtra, India | Phone: +91-9881409217 | Email: cbakul@gmail.com
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;