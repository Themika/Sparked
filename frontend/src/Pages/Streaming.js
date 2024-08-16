import "../Styles/StreamingPage.css";
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
            <div className="streaming-recent-area">
                <h2>Recent Episodes</h2>
                <div className="cards-container">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="streaming-library-area">
                <h2>Explore the Library</h2>
                <div className="cards-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="streaming-full-library-area">
                <h2>Full Library</h2>
                <div className="cards-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default StreamingPage;