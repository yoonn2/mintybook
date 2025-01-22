import React from "react";

const DetailsComponent = ({ date, entries }) => {
    const dailyEntries = entries.filter(
        (entry) => new Date(entry.date).toDateString() === date.toDateString()
    );

    if (dailyEntries.length === 0) {
        return <p>내역이 없습니다.</p>;
    }

    return (
        <div>
            <h2>{date.toLocaleDateString()} 내역</h2>
            <ul>
                {dailyEntries.map((entry) => (
                    <li key={entry.id}>
                        {entry.category}: {entry.amount.toLocaleString()}원 (
                        {entry.type === "income" ? "수입" : "지출"})
                        {entry.memo && <span> - {entry.memo}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailsComponent;
