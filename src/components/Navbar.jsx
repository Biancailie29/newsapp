import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="news-header">
      <div className="container">
        <Link to="/" className="logo">News App</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/world">World</Link></li>
            <li><Link to="/nation">Nation</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/business">Business</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
