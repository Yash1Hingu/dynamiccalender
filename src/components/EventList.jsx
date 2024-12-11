import React from "react";

const EventList = ({ events, onEditEvent, onDeleteEvent }) => (
    <div className="p-4">
        <h3 className="font-bold text-lg">Events</h3>
        {events.length ? (
            events.map((event, index) => (
                <div
                    key={index}
                    className="p-3 mb-2 bg-white rounded-lg shadow-md flex justify-between"
                >
                    <div>
                        <h4 className="font-bold">{event.eventName}</h4>
                        <p>{event.startTime} - {event.endTime}</p>
                        {event.description && <p>{event.description}</p>}
                    </div>
                    <div>
                        <button
                            onClick={() => onEditEvent(index)}
                            className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDeleteEvent(index)}
                            className="px-3 py-1 bg-red-500 text-white rounded ml-2"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <p>No events for the selected day.</p>
        )}
    </div>
);

export default EventList;
