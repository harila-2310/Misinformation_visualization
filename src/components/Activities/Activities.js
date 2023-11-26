// ActivitiesPage.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { getRealTimeNews } from '../Dashboard/getRealTimeNew';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulating user activities with some sample data
    const fetchUserActivities = async () => {
      try {
        const response = await getRealTimeNews();
        const userActivities = response.slice(0, 5).map((news, index) => ({
          id: index + 1,
          type: index % 2 === 0 ? 'Upvote' : 'Downvote',
          news: {
            title: news.title,
            source: news.source.name,
          },
        }));
        setActivities(userActivities);
      } catch (error) {
        console.error('Error fetching user activities:', error);
      }
    };

    fetchUserActivities();
  }, []);

  return (
    <div>
      <h1>Recent Activities</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {activities.map((activity) => (
          <ActivityBox key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

const ActivityBox = ({ activity }) => {
  return (
    <Card style={{ margin: '10px', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardContent>
        <Typography variant="h6">{activity.type === 'Upvote' ? 'Upvoted' : 'Downvoted'}</Typography>
        <Typography variant="body2">
          {activity.type === 'Upvote' ? <ThumbUpIcon /> : <ThumbDownIcon />}
          <br/>
          {activity.news.title}
        </Typography>
        <br/>
        <Typography variant="body2">Source: {activity.news.source}</Typography>
        <Button variant="contained" color="primary">
          View Full News
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivitiesPage;
