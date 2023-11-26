// Dashboard.js
import React, { useEffect, useState } from 'react';
import ImgMediaCard from '../cards/CArd';
import { getRealTimeNews } from './getRealTimeNew';
import BasicSelect from '../Select/Select';
export default function Dashboard() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getRealTimeNews();
      setNewsData(news);
    };

    fetchNews();
  }, []);

  return (
    <>
    <div >
    <BasicSelect select="City" option1="Coimbatore" option2="Salem" option3="Chennai"/>
    <BasicSelect select="State" option1="Kerala" option2="Karnataka" option3="Tamil Nadu"/>
   
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', width: '100%' }}>
      {newsData.map((news, index) => (
        <ImgMediaCard
          key={index}
          title={news.title}
          id={index+1}
          description={news.description}
          imageUrl={news.urlToImage}
          source={news.source.name}
          publishedAt={news.publishedAt}
        />
      ))}
    </div>
    </>
  );
}
