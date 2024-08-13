import Navbar from "../Components/Navbar";
import "../Styles/Home.css";

const Home = () => {
    return (
        <div className="Home-page">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="hero-container">
                <div className="left-side">
                    <h1>Stream your favorite podcast</h1>
                    <p>Watch on any device, anytime, anywhere</p>
                    <button>Get Started</button>
                </div>
                <div className="right-side">
                    <div className="logo-container">
                        <h1>SPARK</h1>
                        <p>PODCAST</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
