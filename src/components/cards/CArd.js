import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function ImgMediaCard(props) {
  // Check if title is available and not equal to "[Removed]"
  const isTitleAvailable = props.title && props.title !== "[Removed]";

  // Format the date
  const formattedDate = new Date(props.publishedAt).toLocaleDateString();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={isTitleAvailable ? props.title : "Image"}
        height="140"
        image={props.imageUrl}
      />
      <CardContent>
        {isTitleAvailable && (
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold', display: 'inline' }}>
          Source:
        </Typography>{' '}
        <Typography variant="body1" color="text.primary" sx={{  fontWeight: 300, display: 'inline' }}>
          {props.source}
        </Typography>
        <br />
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold', display: 'inline' }}>
          Date:
        </Typography>{' '}
        <Typography variant="body1" color="text.primary" sx={{  fontWeight: 300, display: 'inline' }}>
          {formattedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <i className="fa fa-share"></i><Button size="small">Share</Button>
        <i className="fa fa-flag"></i><Button size="small">Report</Button>
       <Link to={`/misinformation/${props.id}`}> 
       <Button size="small" variant={'contained'}target="_blank" rel="noopener noreferrer">
        
         Learn More >>
       
        </Button> </Link>
      </CardActions>
    </Card>
  );
}
