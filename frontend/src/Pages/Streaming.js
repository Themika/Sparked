import "../Styles/Page Styles/StreamingPage.css";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const StreamingPage = () => {
  return (
    <div className="streaming-page">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="streaming-hero-section">
        <h1>Welcome to Our Podcast</h1>
        <p>Catch up on the latest episodes and explore our full library.</p>
      </div>
      <div className="trending-area">
        <div className="hash1"></div>
        <h1>Trending Episodes</h1>
        <div className="trending-area-card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="recent-episodes-area">
        <h1>Recent Episodes</h1>
        <div className="recent-episodes-card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="full-library-episode"></div>
    </div>
  );
};

export default StreamingPage;