import "../Styles/eventPage.css"
import Navbar from "../Components/Navbar"
import Card from "../Components/Card"

const EventsPage = () => {
    return (
        <div className="event-page-container">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="event-page-card-container">
                <Card />
            </div>
        </div>
    );
}
 
export default EventsPage;