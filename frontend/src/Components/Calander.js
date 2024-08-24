import React, { useState } from "react";
import "../Styles/Calander.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const eventDates = [5, 16, 15];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    triggerFade(() => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    });
  };

  const handleNextMonth = () => {
    triggerFade(() => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    });
  };

  const triggerFade = (callback) => {
    setIsFading(true);
    setTimeout(() => {
      callback();
      setIsFading(false);
    }, 500); // Match this duration with the fadeOut animation duration
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderDates = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );

    const dates = [];
    for (let i = 1; i < firstDayOfMonth; i++) {
      dates.push(<div key={`empty-${i}`} className="empty-date" />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isEvent = eventDates.includes(i);
      dates.push(
        <div key={i} className={`date ${isEvent ? "event" : ""}`}>
          {i}
        </div>
      );
    }
    const totalCells = firstDayOfMonth + daysInMonth - 1;
    const emptyCells = 42 - totalCells;
    for (let i = 0; i < emptyCells; i++) {
      dates.push(<div key={`empty-end-${i}`} className="empty-date" />);
    }
    return dates;
  };

  const getMonthName = (month) => {
    return new Date(2000, month).toLocaleString("en-US", { month: "long" });
  };

  const handleMonthClick = () => {
    setIsDatePickerOpen((prev) => !prev);
  };

  const handleDatePickerChange = (event) => {
    const newDate = new Date(event.target.value);
    triggerFade(() => {
      setCurrentDate(newDate);
      setIsDatePickerOpen(false);
    });
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div className="current-month" onClick={handleMonthClick}>
          {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
        </div>
        {isDatePickerOpen && (
          <input
            type="month"
            onChange={handleDatePickerChange}
            value={`${currentDate.getFullYear()}-${String(
              currentDate.getMonth() + 1
            ).padStart(2, "0")}`}
            className="date-picker"
          />
        )}
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={`days-of-week ${isFading ? "hidden" : ""}`}>
        {renderDaysOfWeek()}
      </div>
      <div className={`dates ${isFading ? "hidden" : ""}`}>{renderDates()}</div>
    </div>
  );
};

export default Calendar;
