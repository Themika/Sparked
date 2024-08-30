import "../Styles/Component Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className="logo">
                    <div className="logo-container-navbar">
                        <h1>SPARK</h1>
                        <p>PODCAST</p>
                    </div>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/streaming">Streaming</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;