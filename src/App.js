import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleDetail from "./pages/ArticleDetail";
import './App.css';
import CNN from './pages/CNN';
import BBC from './pages/BBC';
import Reuters from './pages/Reuters';
import AlJazeera from './pages/AlJazeera';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/world" element={<CNN  topic="world" />} />
        <Route path="/nation" element={<BBC topic="nation" />} />
        <Route path="/technology" element={<Reuters topic="technology" />} />
        <Route path="/business" element={<AlJazeera topic="business" />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
