// NewsDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsDetails, getRealTimeNews } from '../getRealTimeNew';
import MonthlyBarChart from './MapView';
import AnalyticEcommerce from './SentimentAnalysis';
import { Button, Grid, Stack, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import IncomeAreaChart from './Review';
import SimpleSnackbar from '../../Snackbar/SnackBar';
import html2pdf from 'html2pdf.js';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [slot, setSlot] = useState('week');
  const [userOpinion, setUserOpinion] = useState('');
  const [truthValue, setTruthValue] = useState('true'); 
  const [publicComments, setPublicComments] = useState([
    { user: 'User1', opinion: 'This news is great!', isTrue: true },
    { user: 'User2', opinion: 'I don\'t think this is true.', isTrue: false },
    // Add more sample comments as needed
  ]);

  const handleExportToPDF = () => {
    const content = document.getElementById('news-details');
    const pdfOptions = {
      margin: 10,
      filename: `news_details${id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
    };

    // Generate PDF
    const pdf = html2pdf().from(content).set(pdfOptions);

    // Save the PDF to the local file system
    pdf.save();
  };
  
  useEffect(() => {
    const fetchNewsDetails = async () => {
      const details = await getNewsDetails(id);
      setNewsDetails(details);
    };

    fetchNewsDetails();
  }, [id]);

  const handlePostOpinion = () => {
    // You can handle the logic to post the user's opinion here
    console.log('User Opinion:', userOpinion);
    console.log('Is True:', truthValue);

    // For demonstration purposes, we'll add the user's opinion to the state
    setPublicComments([
      ...publicComments,
      { user: 'Current User', opinion: userOpinion, isTrue: truthValue === 'true' },
    ]);

    // Reset the input fields after posting
    setUserOpinion('');
    setTruthValue('true');
  };
  if (!newsDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Button variant='contained'  onClick={handleExportToPDF}><i className="fa fa-download"></i>&nbsp;&nbsp;&nbsp;Export</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant='contained'><i className="fa fa-share"></i>&nbsp;&nbsp;&nbsp;Share</Button>
    <div  id="news-details" style={{display:'flex',margin:'0'}} >
      <div style={{width:'50%',padding:'50px'}}>
      <h1>{newsDetails.title}</h1>
     <div >
     <img src={newsDetails.urlToImage} width={'100%'}/>
      <h2>Read Full News in :</h2><a href={newsDetails.url}>{newsDetails.url}</a>
     </div>
        </div>
      <div style={{width:'50%' }}>
        <div style={{textAlign:'center',boxShadow: '0 10px 12px 5px rgba(0, 0, 0, 0.2)',height:'50%' }}>
        <h1><u>Region Wise Analysis(Percentage of Spread)</u> </h1>
        <MonthlyBarChart/>
        </div>
        <br/>
        <br/>
        <br/> 
          <h1> Social Media Analysis</h1>
        <div style={{display:'flex',width:'100%'}}>
          <div style={{padding:'20px'}}>

        <AnalyticEcommerce title="Instagram" count="78,250" percentage={70.5} extra="8,900" />
          </div>
          <div style={{padding:'20px'}}>
        <AnalyticEcommerce title="Twitter" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
        </div>
        <div style={{padding:'20px'}}>
        <AnalyticEcommerce title="Facebook" count="35,078" percentage={27.4} isLoss color="warning" extra="2,395" />
        </div>
        </div>
        
        {/* <Map newsData={newsData} /> */}
      </div>
      
    </div>
    <div style={{boxShadow: '6px 10px 12px 5px rgba(0, 0, 0, 0.2)',padding:'20px'}}>
    <Grid item style={{textAlign:'center'}}>
            <Typography variant="h4"><b>Public Opinion</b></Typography>
          </Grid><br/><br/>
    <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
    <IncomeAreaChart slot={slot} />
    </div>
    <div style={{ boxShadow: '6px 10px 12px 5px rgba(0, 0, 0, 0.2)', padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4"><b>Your Opinion</b></Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Opinion"
                  multiline
                  fullWidth
                  rows={4}
                  value={userOpinion}
                  onChange={(e) => setUserOpinion(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="truth-value-label">Is it true?</InputLabel><br/>
                  <Select
                    labelId="truth-value-label"
                    id="truth-value"
                    value={truthValue}
                    onChange={(e) => setTruthValue(e.target.value)}
                  >
                    <MenuItem value="true">True</MenuItem>
                    <MenuItem value="false">False</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <div onClick={handlePostOpinion}><SimpleSnackbar name="Post"/></div>
             
              </Grid>
            </Grid>

            <br />
            <br />
            <h2>Public Comments :</h2>
            {publicComments.map((comment, index) => (
          <div key={index} style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <Typography variant="subtitle1"><b>{comment.user}</b></Typography>
            <Typography>{comment.opinion}</Typography>
            <Typography variant="caption" color={comment.isTrue ? 'primary' : 'error'}>
              {comment.isTrue ? 'Verified True' : 'Not Verified True'}
            </Typography>
          </div>
        ))}
            {/* Display opinions or comments of other people here */}
          </div>
    </>
  );
};

export default NewsDetails;
