// EducationalResourcesPage.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const EducationalResourcesPage = () => {
  const cardStyle = {
    margin: '10px',
    maxWidth: '900px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign:'center'}}>Educational Resources</h1>

      <section>
        <h2>Media Literacy Resources</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Media Literacy Resource 1</Typography><br/>
              <Button variant="outlined" href="https://medialiteracyresource1.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Media Literacy Resource 2</Typography><br/>
              <Button variant="outlined" href="https://medialiteracyresource2.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Media Literacy Resource 3</Typography><br/>
              <Button variant="outlined" href="https://medialiteracyresource3.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Media Literacy Resource 4</Typography><br/>
              <Button variant="outlined" href="https://medialiteracyresource4.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Media Literacy Resource 5</Typography><br/>
              <Button variant="outlined" href="https://medialiteracyresource5.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2>Critical Thinking Resources</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Critical Thinking Resource 1</Typography><br/>
              <Button variant="outlined" href="https://criticalthinkingresource1.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Critical Thinking Resource 2</Typography><br/>
              <Button variant="outlined" href="https://criticalthinkingresource2.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Critical Thinking Resource 3</Typography><br/>
              <Button variant="outlined" href="https://criticalthinkingresource3.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Critical Thinking Resource 4</Typography><br/>
              <Button variant="outlined" href="https://criticalthinkingresource4.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Critical Thinking Resource 5</Typography><br/>
              <Button variant="outlined" href="https://criticalthinkingresource5.com" target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


      <section>
        <h2>Tips for Identifying Misinformation</h2>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="body1">
              <ul>
                <li>Verify information from multiple reliable sources.</li>
                <li>Check the publication date of the content.</li>
                <li>Examine the credibility of the author or source.</li>
                <li>Be cautious of sensational or clickbait headlines.</li>
                <li>Consider the supporting evidence provided in the content.</li>
              </ul>
              <Button  variant='contained'><Link style={{textDecoration:'none',color:'white'}} to='/tools'>Use Tools -></Link></Button>
            </Typography>
            
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default EducationalResourcesPage;
