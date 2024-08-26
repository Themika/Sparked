import "../Styles/eventPage.css";
import Navbar from "../Components/Navbar";
import Calendar from "../Components/Calander";
import TinyCard from "../Components/TinyCard";
import { useRef } from "react";

const EventsPage = () => {
  const recentEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);

  const scrollLeft = (ref) => {
    console.log('Scrolling left'); // Debugging line
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  
  const scrollRight = (ref) => {
    console.log('Scrolling right'); // Debugging line
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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
              <div className="recent-events-container" ref={recentEventsRef}>
                <div className="arrow left" onClick={() => scrollLeft(recentEventsRef)}></div>
                <TinyCard />
                <TinyCard />
                <div className="arrow right" onClick={() => scrollRight(recentEventsRef)}></div>
              </div>
            </div>
            <div className="event-page-right-lowerhalf">
              <h1 className="upcoming-events">Upcoming Events</h1>
              <div className="upcoming-events-container" ref={upcomingEventsRef}>
                <div className="arrow left" onClick={() => scrollLeft(upcomingEventsRef)}></div>
                <TinyCard />
                <TinyCard />
                <div className="arrow right" onClick={() => scrollRight(upcomingEventsRef)}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
