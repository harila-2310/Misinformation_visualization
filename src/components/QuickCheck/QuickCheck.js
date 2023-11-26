// QuickCheckPage.js
import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import { getRealTimeNews } from '../Dashboard/getRealTimeNew';

const QuickCheck = () => {
  const [keyword, setKeyword] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCheckNews = async () => {
    try {
      setLoading(true);
      const response = await getRealTimeNews();
      setNewsData(response.filter(news => news.title.toLowerCase().includes(keyword.toLowerCase())));
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setKeyword('');
    setNewsData([]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Quick Check</h1>
      <TextField
        label="Enter Keyword"
        fullWidth
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <Button variant="contained" onClick={handleCheckNews}>
        Check News
      </Button>

      <Button variant="outlined" onClick={handleClear} style={{ marginLeft: '10px' }}>
        Clear
      </Button>

      {loading && <p>Loading...</p>}

      <div style={{  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', width: '100%' }}>
        {newsData.map((news, index) => (
          <Card key={index} style={{ margin: '10px', maxWidth: '300px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.description}
              </Typography><br/>
              <Button variant='contained'>
                <Typography variant="body1" color="text.light" sx={{ fontWeight: 'bold', display: 'inline' }}>
                  Content:
                </Typography>{' '}
                <Typography variant="body1" color="text.light" sx={{ fontWeight: 300, display: 'inline' }}>
                  {news.title.toLowerCase().includes(keyword.toLowerCase()) ? 'True' : 'False'}
                </Typography>
              </Button><br/><br/>
              <Button variant='outlined'>Vote</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickCheck;
