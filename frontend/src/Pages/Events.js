import "../Styles/eventPage.css";
import Navbar from "../Components/Navbar";
import Calendar from "../Components/Calander";
import Card from "../Components/Card";

const EventsPage = () => {
  return (
    <div className="event-page-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="event-page-container-sides">
        <div className="event-page-left">
          <Calendar />
        </div>
        <div className="event-page-right">
          <div className="event-page-right-header">
            <div className="event-page-right-upperhalf">
              <h1 className="recent-events">Recent Events</h1>
              <div className="recent-events-cards">
                
              </div>
            </div>
            <div className="event-page-right-lowerhalf">
              <h1 className="upcoming-events">Upcoming Events</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
