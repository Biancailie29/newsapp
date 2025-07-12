import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/newsApi";
import { Link } from 'react-router-dom';
import NewsItem from "../components/NewsItem";
import heroImage from '../assets/hero-news.jpg';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?lang=en&token=${process.env.REACT_APP_GNEWS_API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
        {/* HERO SECTION */}
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Stay Updated with the Latest News</h1>
                    <p>Get breaking headlines, tech updates, world events, and more — all in one place, updated every minute.</p>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="News" />
                </div>
            </div>
        </section>
        {/* ALL NEWS CARDS */}
        <div className="news-container set-margin-padding">
            <h2>Latest News</h2>
        </div>
        <div className="news-container">
            {articles.map((article, index) => (
                <NewsItem key={index} article={article} />
            ))}
        </div>
        
        
    </>
  );
}

export default Home;
