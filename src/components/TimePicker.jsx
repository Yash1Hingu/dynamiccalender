import React, { useState } from "react";

function TimePicker({ startTime, setStartTime, endTime, setEndTime, isCurrentDate }) {

    // Generate time options in 15-minute intervals
    const generateTimeOptions = () => {
        const times = [];
        for (let i = 0; i < 24 * 60; i += 15) {
            const hours = Math.floor(i / 60).toString().padStart(2, "0");
            const minutes = (i % 60).toString().padStart(2, "0");
            times.push(`${hours}:${minutes}`);
        }
        return times;
    };

    const timeOptions = generateTimeOptions();

    return (
        <div>
            {/* Start Time Selector */}
            <select
                value={startTime}
                name="startTime"
                onChange={(e) => {
                    setStartTime(e);
                    // Reset end time if it becomes invalid
                    if (endTime && e.target.value > endTime) {
                        setEndTime("");
                    }
                }}
                className="block w-full mb-2 p-2 border rounded"
                required
            >
                <option value="" disabled>
                    Select Start Time
                </option>
                {timeOptions.map((time) => (
                    <option
                        name='startTime'
                        key={time}
                        value={time}
                        hidden={isCurrentDate && time < new Date().toTimeString().slice(0, 5)}
                    >
                        {time}
                    </option>
                ))}
            </select>

            {/* End Time Selector */}
            <select
                name="endTime"
                value={endTime}
                onChange={setEndTime}
                className="block w-full mb-2 p-2 border rounded"
                required
            >
                <option value="" disabled>
                    Select End Time
                </option>
                {timeOptions.map((time) => (
                    <option
                        name='endTime'
                        key={time}
                        value={time}
                        hidden={!startTime || time <= startTime}
                    >
                        {time}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TimePicker;
