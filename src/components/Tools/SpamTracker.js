import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const SpamMessageDetector = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const detectSpam = () => {
    // Define simple rules for spam detection
    const spamIndicators = ['win', 'free', 'click', 'claim', 'urgent'];

    // Check if any spam indicator is present in the user input
    const isSpam = spamIndicators.some(indicator => message.toLowerCase().includes(indicator));

    // Display the result with different colors
    if (isSpam) {
      setResult('Warning: This message may be spam.');
    } else {
      setResult('No spam detected. The message looks safe.');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={{ margin: '20px 0' ,textAlign:'center'}}>
        Spam Message Detector
      </Typography>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Enter your message here"
        multiline
        fullWidth
        rows={4}
        variant="outlined"
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={detectSpam}>
        Detect Spam
      </Button>
      <Typography variant="body1" style={{ marginTop: '20px', color: result.includes('Warning') ? 'red' : 'green' }}>
        {result}
      </Typography>
    </Container>
  );
};

export default SpamMessageDetector;
