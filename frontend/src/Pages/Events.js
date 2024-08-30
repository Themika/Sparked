import "../Styles/Page Styles/eventPage.css";
import Navbar from "../Components/Navbar";
import Calendar from "../Components/Calander";
import TinyCard from "../Components/TinyCard";
import Modal from "../Components/Modal";
import { useRef, useState, useEffect } from "react";

const EventsPage = () => {
  const upcomingEventsContainerRef = useRef(null);
  const recentEventsContainerRef = useRef(null);

  const [upcomingScrollPosition, setUpcomingScrollPosition] = useState(0);
  const [recentScrollPosition, setRecentScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventDate, setSelectedEventDate] = useState(null);

  const handleLeftArrowClick = (containerRef, setScrollPosition) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 400; // Adjust the value as needed
      setScrollPosition(containerRef.current.scrollLeft - 400);
    }
    console.log("Left arrow clicked");
  };

  const handleRightArrowClick = (containerRef, setScrollPosition) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400; // Adjust the value as needed
      setScrollPosition(containerRef.current.scrollLeft + 400);
    }
    console.log("Right arrow clicked");
  };

  useEffect(() => {
    const handleScroll = (containerRef, setScrollPosition) => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    const upcomingContainer = upcomingEventsContainerRef.current;
    const recentContainer = recentEventsContainerRef.current;

    if (upcomingContainer) {
      upcomingContainer.addEventListener("scroll", () =>
        handleScroll(upcomingContainer, setUpcomingScrollPosition)
      );
    }

    if (recentContainer) {
      recentContainer.addEventListener("scroll", () =>
        handleScroll(recentContainer, setRecentScrollPosition)
      );
    }

    return () => {
      if (upcomingContainer) {
        upcomingContainer.removeEventListener("scroll", () =>
          handleScroll(upcomingContainer, setUpcomingScrollPosition)
        );
      }

      if (recentContainer) {
        recentContainer.removeEventListener("scroll", () =>
          handleScroll(recentContainer, setRecentScrollPosition)
        );
      }
    };
  }, []);

  const isAtStart = (scrollPosition) => scrollPosition <= 0;
  const isAtEnd = (containerRef, scrollPosition) => {
    if (containerRef.current) {
      return (
        scrollPosition >=
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    }
    return false;
  };

  const handleEventDateClick = (date) => {
    setSelectedEventDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    const modalElement = document.querySelector(".modal");
    if (modalElement) {
      modalElement.classList.add("closing");
      setTimeout(() => {
        setIsModalOpen(false);
        setSelectedEventDate(null);
      }, 500); // Match the duration of the slideOutToRight animation (0.5s)
    }
  };

  return (
    <div className="event-page-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="event-page-container-sides">
        <div className="event-page-left">
          <Calendar onEventDateClick={handleEventDateClick} />
        </div>
        <div className="event-page-right">
          <div className="event-page-right-header">
            <div className="event-page-right-upperhalf">
              <h1 className="recent-events">Recent Events</h1>
              <div className="event-page-right-wrap-lowerhalf">
                <div
                  className={`arrow arrow-left ${
                    isAtStart(recentScrollPosition) ? "disabled" : ""
                  }`}
                  id="backBtn"
                  onClick={() =>
                    handleLeftArrowClick(
                      recentEventsContainerRef,
                      setRecentScrollPosition
                    )
                  }
                ></div>
                <div
                  className="recent-events-container"
                  ref={recentEventsContainerRef}
                >
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                </div>
                <div
                  className={`arrow arrow-right ${
                    isAtEnd(recentEventsContainerRef, recentScrollPosition)
                      ? "disabled"
                      : ""
                  }`}
                  id="nextBtn"
                  onClick={() =>
                    handleRightArrowClick(
                      recentEventsContainerRef,
                      setRecentScrollPosition
                    )
                  }
                ></div>
              </div>
            </div>
            <div className="event-page-right-wrap-lowerhalf">
              <div
                className={`arrow arrow-left ${
                  isAtStart(upcomingScrollPosition) ? "disabled" : ""
                }`}
                id="backBtn"
                onClick={() =>
                  handleLeftArrowClick(
                    upcomingEventsContainerRef,
                    setUpcomingScrollPosition
                  )
                }
              ></div>
              <div className="event-page-right-lowerhalf">
                <h1 className="upcoming-events">Upcoming Events</h1>
                <div
                  className="upcoming-events-container"
                  ref={upcomingEventsContainerRef}
                >
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                  <span>
                    <TinyCard />
                  </span>
                </div>
              </div>
              <div
                className={`arrow arrow-right ${
                  isAtEnd(upcomingEventsContainerRef, upcomingScrollPosition)
                    ? "disabled"
                    : ""
                }`}
                id="nextBtn"
                onClick={() =>
                  handleRightArrowClick(
                    upcomingEventsContainerRef,
                    setUpcomingScrollPosition
                  )
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        selectedEventDate={selectedEventDate}
        closeModal={closeModal}
      />
    </div>
  );
};

export default EventsPage;
