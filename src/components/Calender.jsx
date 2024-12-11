import React, { useEffect, useState } from "react";

const Calendar = ({ onDateClick, selectedDate }) => {
    const [currentDate, setCurrentDate] = useState(selectedDate || new Date());
    const [events, setEvents] = useState({}); // State to store events as an object

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDay();

    const today = new Date();

    const handlePreviousMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            )
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            )
        );
    };

    // Get days from the previous month
    const previousMonthDays = firstDayOfMonth > 0 ? Array.from({
        length: firstDayOfMonth
    }, (_, i) => {
        const prevDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            -i
        );
        return (
            <button
                key={`prev-${i}`}
                className="p-2 m-1 w-10 h-10 flex items-center justify-center text-sm font-medium bg-gray-100 text-gray-400 rounded-full"
                disabled
            >
                {prevDate.getDate()}
            </button>
        );
    }).reverse() : [];

    // Get days from the next month
    const nextMonthDays = lastDayOfMonth < 6 ? Array.from({
        length: 6 - lastDayOfMonth
    }, (_, i) => {
        const nextDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            i + 1
        );
        return (
            <button
                key={`next-${i}`}
                className="p-2 m-1 w-10 h-10 flex items-center justify-center text-sm font-medium bg-gray-100 text-gray-400 rounded-full"
                disabled
            >
                {nextDate.getDate()}
            </button>
        );
    }) : [];

    // Get days of the current month
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => {
        const day = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            i + 1
        );
        const isToday = day.toDateString() === today.toDateString();
        const isSelected =
            selectedDate && selectedDate.toDateString() === day.toDateString();

        return (
            <button
                key={`current-${i}`}
                onClick={() => onDateClick(day)}
                className={`p-2 m-1 w-10 h-10 flex items-center justify-center text-sm font-medium rounded-full ${
                    isSelected
                        ? "bg-green-500 text-white"
                        : isToday
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                }`}
            >
                {i + 1}
            </button>
        );
    });

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePreviousMonth}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    Previous
                </button>
                <h2 className="text-xl font-bold">
                    {currentDate.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {"Sun Mon Tue Wed Thu Fri Sat".split(" ").map((day, index) => (
                    <div key={index} className="text-center font-bold">
                        {day}
                    </div>
                ))}
                {previousMonthDays}
                {currentMonthDays}
                {nextMonthDays}
            </div>
        </div>
    );
};

export default Calendar;
