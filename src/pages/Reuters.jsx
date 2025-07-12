// src/pages/CNN.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';

function CNN() {
  const [articles, setArticles] = useState([]);
  const topic = 'technology';

  useEffect(() => {
    const fetchTopicNews = async () => {
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?lang=en&topic=${topic}&token=${process.env.REACT_APP_GNEWS_API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchTopicNews();
  }, [topic]);

  return (
    <div className="page-wrapper set-container">
      <h1>Technology News</h1>
      <NewsList articles={articles} />
    </div>
  );
}

export default CNN;
