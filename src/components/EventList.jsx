import React from "react";

const EventList = ({ events, onEditEvent, onDeleteEvent }) => {
    // Define an array of Tailwind background color classes
    const bgColors = [
        "bg-fuchsia-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500"
    ];

    return (
        <div className="max-h-[400px] overflow-y-scroll p-4 custom-scrollbar">
            <h3 className="font-semibold text-lg mb-4">Your Events</h3>
            {events.length ? (
                events.map((event, index) => {
                    // Select a random background color for each event
                    const randomBg = bgColors[index % bgColors.length]; // Use modulo to cycle through colors
                    return (
                        <div
                            key={index}
                            className={`p-3 mb-2 rounded-lg shadow-md flex justify-between items-center group ${randomBg} relative`}
                        >
                            <div>
                                <p className="text-gray-200">{event.startTime} - {event.endTime}</p>
                                <h4 className="font-semibold text-gray-200 mt-2">{event.title}</h4>
                                {event.description && <p className="font-light text-gray-200">{event.description}</p>}
                            </div>
                            <div className="flex opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-2 right-2">
                                <button
                                    onClick={() => onEditEvent(index)}
                                    className="p-2 bg-blue-800 text-white rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m5 16l-1 4l4-1L18 9l-3-3z" opacity="0.16" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8" /></g></svg>
                                </button>
                                <button
                                    onClick={() => onDeleteEvent(index)}
                                    className="p-2 bg-red-800 text-white rounded-full ml-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9h8v10H8z" opacity="0.3"/><path fill="currentColor" d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"/></svg>
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No events for the selected day.</p>
            )}
        </div>
    );
};

export default EventList;
