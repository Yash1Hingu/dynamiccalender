import React, { useState, useEffect } from "react";
import Calendar from "./components/Calender";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

import logo from './assets/logo.svg';

const App = () => {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentindex, setCurrentindex] = useState();

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to localStorage whenever the events state changes
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Refresh selectedEvents whenever events or selectedDate changes
  useEffect(() => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    setSelectedEvents(events[dateKey] || []);
  }, [events, selectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const dateKey = date.toISOString().split("T")[0];
    setSelectedEvents(events[dateKey] || []);
    setEventFormVisible(true);
  };

  const handleAddEvent = (newEvent) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const parseTime = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const newStartTime = parseTime(newEvent.startTime);
    const newEndTime = parseTime(newEvent.endTime);

    if (newEndTime <= newStartTime) {
      alert("End time must be after start time.");
      return;
    }

    const hasOverlap = (events[dateKey] || []).some((event) => {
      const eventStartTime = parseTime(event.startTime);
      const eventEndTime = parseTime(event.endTime);

      return (
        (newStartTime >= eventStartTime && newStartTime < eventEndTime) ||
        (newEndTime > eventStartTime && newEndTime <= eventEndTime) ||
        (newStartTime <= eventStartTime && newEndTime >= eventEndTime)
      );
    });

    if (hasOverlap) {
      alert("Event time overlaps with an existing event.");
      return;
    }

    setEvents((prev) => {
      const updatedEvents = [...(prev[dateKey] || []), newEvent];
      setSelectedEvents(updatedEvents); // Update selected events
      return { ...prev, [dateKey]: updatedEvents };
    });

    setEventFormVisible(false);
  };

  const handleEditEvent = (index) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    setCurrentEvent(events[dateKey][index]);
    setCurrentindex(index);
    setEventFormVisible(true);
  };

  const handleUpdateEvent = (newEventData) => {
    const dateKey = selectedDate.toISOString().split("T")[0];

    setEvents((prev) => {
      const updatedEvents = [...prev[dateKey]];
      updatedEvents[currentindex] = newEventData;
      setSelectedEvents(updatedEvents); // Update selected events
      return { ...prev, [dateKey]: updatedEvents };
    });
    setEventFormVisible(false);
  };

  const handleDeleteEvent = (index) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    setEvents((prev) => {
      const updatedEvents = prev[dateKey].filter((_, i) => i !== index);
      return { ...prev, [dateKey]: updatedEvents };
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-2">
        <img
          src={logo}
          alt="logo"
          className="w-16 m-auto"
        />
      </h1>
      <div className="max-h-screen max-w-[1240px] m-auto p-4 sm:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Calendar onDateClick={handleDateClick} selectedDate={selectedDate} />
        </div>
        {eventFormVisible && (
          <EventForm
            isCurrentDate={selectedDate.toDateString() === new Date().toDateString()}
            initialEvent={currentEvent}
            onAddEvent={handleAddEvent}
            onUpdateEvent={handleUpdateEvent}
            onClose={() => setEventFormVisible(false)}
          />
        )}
        <div className="col-span-1">
          <EventList
            events={selectedEvents}
            onEditEvent={(index) => handleEditEvent(index)}
            onDeleteEvent={handleDeleteEvent}
          />
        </div>
      </div>
    </>
  );
};

export default App;
