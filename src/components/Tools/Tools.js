// ToolsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ToolsPage = () => {
  const cardStyle1 = {
    margin: '10px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    textDecoration: 'none', // Remove underline from links
  };

  return (
    <div style={{ padding: '30px' }}>
      <Button variant='contained' component={Link} to="/tools/fact-check">
        <CardContent>
          <Typography variant="h6">Crowd-Sourced Fact Checking</Typography><br/>
          <Typography variant="body1">
            Click here to go to <strong>Crowd-Sourced Fact Checking</strong>.
          </Typography>
        </CardContent>
      </Button>
     &nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='contained'component={Link} to="/tools/spam-tracker">
        <CardContent>
          <Typography variant="h6">Spam message Detector</Typography><br/>
          <Typography variant="body1">
            Click here to go to <strong>Spam message Detector</strong>.
          </Typography>
        </CardContent>
      </Button>
    </div>
  );
};

export default ToolsPage;
