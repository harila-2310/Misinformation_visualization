// api.js
import axios from 'axios';

const apiKey = '90dc28fd626947f08904c757a037f5de'; // Replace with your actual API key

export const getRealTimeNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching real-time news:', error);
    return [];
  }
};
export const getNewsDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    const newsDetails = response.data.articles.find((news, index) => index + 1 === parseInt(id));

    return newsDetails || {};
  } catch (error) {
    console.error('Error fetching news details:', error);
    return {};
  }
};