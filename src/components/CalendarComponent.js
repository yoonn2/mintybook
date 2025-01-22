import React, { useState } from "react";
import Calendar from "react-calendar";


const CalendarComponent = ({ entries, onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    //날짜 클릭 시 호출
    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    // 날짜별 수입/지출 금액 계산
    const getTileContent = ({ date }) => {
        const dailyEntries = entries.filter(
        (entry) =>
            new Date(entry.date).toDateString() === date.toDateString()
        );

        const totalIncome = dailyEntries
            .filter((entry) => entry.type === "income")
            .reduce((sum, entry) => sum + Number(entry.amount), 0);
        
        const totalExpense= dailyEntries
            .filter((entry) => entry.type === "expense")
            .reduce((sum, entry) => sum + Number(entry.amount), 0);    
        
        if (totalIncome || totalExpense) {
            return (
                <div>
                    <span style={{ color: "blue" }}>+{totalIncome.toLocaleString()}</span>
                    <br />
                    <span style={{ color: "red" }}>-{totalExpense.toLocaleString()}</span>
                </div>
            );
        }
        
        return null;
    };

    return (
        <div>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileContent={getTileContent} // 날짜별 수입/지출 표시
            />    
        </div>
    );
};

export default CalendarComponent;