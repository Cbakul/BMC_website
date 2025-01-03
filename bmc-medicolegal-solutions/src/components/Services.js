import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { VerifiedUser, Gavel, Search } from '@mui/icons-material';

const Services = () => {
  const services = [
    { icon: <VerifiedUser />, title: 'Pre-Health Insurance Verification', description: 'Comprehensive video verification services before underwriting to ensure accurate risk assessment.' },
    { icon: <Gavel />, title: 'Medicolegal Consulting', description: 'Expert consultation for hospitals, insurance companies, and individuals with full case defense rights.' },
    { icon: <Search />, title: 'Digital Claim Investigation', description: 'Advanced digital investigation techniques for thorough claim verification and fraud prevention.' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Specialized Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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

export default Services;