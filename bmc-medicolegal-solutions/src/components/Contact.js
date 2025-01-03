import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h3">
            BMC MEDICOLEGAL SOLUTIONS
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <LocationOn style={{ marginRight: '8px' }} />
            <Typography variant="body1">Pune, Maharashtra, India</Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <Phone style={{ marginRight: '8px' }} />
            <Typography variant="body1">+91-9881409217</Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <Email style={{ marginRight: '8px' }} />
            <Typography variant="body1">
              <a href="mailto:cbakul@gmail.com">cbakul@gmail.com</a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;