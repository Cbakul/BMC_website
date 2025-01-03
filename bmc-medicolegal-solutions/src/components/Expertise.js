import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Gavel, AccountBalance, AttachMoney, School, Assignment, Business } from '@mui/icons-material';

const Expertise = () => {
  const expertiseAreas = [
    { icon: <Gavel />, title: 'Ombudsman & Consumer Cases', description: 'Expert defense consultation for customers and insurance companies.' },
    { icon: <AccountBalance />, title: 'Intellectual Property Law', description: 'Trademark and intellectual property consultation services.' },
    { icon: <AttachMoney />, title: 'Financial Advisory', description: 'Health benefit claims and mutual fund consultation.' },
    { icon: <School />, title: 'Medicolegal Education', description: 'Professional lectures and awareness programs.' },
    { icon: <Assignment />, title: 'Claims File Audit', description: 'Comprehensive medicolegal audit of insurance claims.' },
    { icon: <Business />, title: 'Corporate Consulting', description: 'Specialized services for corporate and government sectors.' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Areas of Expertise
      </Typography>
      <Grid container spacing={4}>
        {expertiseAreas.map((area, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                  {area.icon}
                </div>
                <Typography variant="h6" component="h3">
                  {area.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {area.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Expertise;