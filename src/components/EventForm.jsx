import React, { useState } from "react";
import TimePicker from "./TimePicker";

const EventForm = ({ initialEvent, onAddEvent, onUpdateEvent, onClose, isCurrentDate }) => {
    const [formData, setFormData] = useState(
        initialEvent || { title: "", startTime: "", endTime: "", description: "" }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            console.log(prev);
            return ({ ...prev, [name]: value })
        });
    };

    const handleSubmit = () => {
        if (initialEvent) {
            onUpdateEvent(formData)
        } else {
            onAddEvent(formData);
        }
    };

    const getCurrentTime = () => {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <form
                className="bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-lg font-bold mb-4">Add Event</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Event Name"
                    value={formData.title}
                    onChange={handleChange}
                    className="block w-full mb-2 p-2 border rounded"
                    required
                />
                <TimePicker
                    startTime={formData.startTime}
                    endTime={formData.endTime}
                    setStartTime={handleChange}
                    setEndTime={handleChange}
                    isCurrentDate={isCurrentDate}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full mb-4 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EventForm;
