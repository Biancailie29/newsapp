import { useLocation, useNavigate } from "react-router-dom";

function ArticleDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user directly accesses URL without state
  if (!state || !state.article) {
    return (
      <div className="article-detail">
        <h2>Article not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const { article } = state;
  const { title, image, content, description, publishedAt, author, source } = article;

  return (
    <div className="article-detail">
      <button onClick={() => navigate("/")} className="set-back-btn">Go Back</button>
      <img src={image} alt={title} className="detail-img" />
      <h1>{title}</h1>
      <p><strong>Published:</strong> {new Date(publishedAt).toLocaleString()}</p>
      <p><strong>Author:</strong> {author || "Unknown"}</p>
      <p><strong>Source:</strong> {source?.name}</p>
      <p className="desc">{description}</p>
      <p className="content">{content || "Full content not available from API."}</p>
    </div>
  );
}

export default ArticleDetail;
