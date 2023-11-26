// FaceCheckPage.js
import React, { useState, useEffect } from 'react';
import { TextField, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { getRealTimeNews } from '../Dashboard/getRealTimeNew';
import { Card, CardContent, Typography, Button } from '@mui/material';

const FaceCheckPage = () => {
  const [factChecks, setFactChecks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // Fetch real-time news when the component mounts
    const fetchNews = async () => {
      try {
        const response = await getRealTimeNews();
        setFactChecks(response.map((news, index) => ({
          id: index + 1,
          claim: news.title,
          source: news.source.name,
          upvotes: Math.floor(Math.random() * 100), // Random number of upvotes (0 to 100)
          downvotes: Math.floor(Math.random() * 50), // Random number of downvotes (0 to 50)
        })));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleVote = (id, isUpvote) => {
    setFactChecks((prevFactChecks) =>
      prevFactChecks.map((factCheck) =>
        factCheck.id === id
          ? {
              ...factCheck,
              upvotes: isUpvote ? factCheck.upvotes + 1 : factCheck.upvotes,
              downvotes: isUpvote ? factCheck.downvotes : factCheck.downvotes + 1,
            }
          : factCheck
      )
    );
  };

  const filteredFactChecks = factChecks.filter((factCheck) =>
    factCheck.claim.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <h1>Fact-Check Page</h1>
      <TextField
        label="Search News Keyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        style={{ marginBottom: '20px', width: '50%' }}
      />
      &nbsp;&nbsp;
      <Button variant='contained'>Check Your Own News</Button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {filteredFactChecks.map((factCheck) => (
          <FactCheckCard
            key={factCheck.id}
            factCheck={factCheck}
            onVote={(isUpvote) => handleVote(factCheck.id, isUpvote)}
          />
        ))}
      </div>
    </div>
  );
};

const FactCheckCard = ({ factCheck, onVote }) => {
  return (
    <Card style={{ margin: '10px', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardContent>
        <Typography variant="h6">{factCheck.claim}</Typography>
        <Typography variant="body2">Source: {factCheck.source}</Typography>
        <Typography variant="body2">Upvotes: {factCheck.upvotes}</Typography>
        <Typography variant="body2">Downvotes: {factCheck.downvotes}</Typography>
        <IconButton color="primary" onClick={() => onVote(true)}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => onVote(false)}>
          <ThumbDownIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default FaceCheckPage;
