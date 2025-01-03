import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Person, LocalHospital, Business, CorporateFare } from '@mui/icons-material';

const WhoWeServe = () => {
  const services = [
    { icon: <Person />, title: 'Policy Customers', description: 'Individual and group policy holders seeking expert guidance' },
    { icon: <LocalHospital />, title: 'Hospitals & Healthcare', description: 'Medical institutions requiring medicolegal support' },
    { icon: <Business />, title: 'Insurance Companies', description: 'Insurance providers seeking expert investigation and consultation services' },
    { icon: <CorporateFare />, title: 'Corporate & Government', description: 'Organizations needing comprehensive insurance solutions' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Who We Serve
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                  {service.icon}
                </div>
                <Typography variant="h6" component="h3">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhoWeServe;