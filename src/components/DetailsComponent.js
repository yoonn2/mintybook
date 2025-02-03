import React from "react";

const DetailsComponent = ({ date, entries }) => {
    // 날짜와 항목이 유효한지 확인
    if (!date) {
        return <p>날짜를 선택하세요.</p>;
    }

    const dailyEntries = (entries || []).filter((entry) => {
        const entryDate = new Date(entry.date);
        return (
            entryDate.getFullYear() === date.getFullYear() &&
            entryDate.getMonth() === date.getMonth() &&
            entryDate.getDate() === date.getDate()
        );
    });

    if (dailyEntries.length === 0) {
        return <p>선택한 날짜의 내역이 없습니다.</p>;
    }

    return (
        <div>
            <h2>{date.toLocaleDateString()}</h2>
            <ul>
                {dailyEntries.map((entry) => (
                    <li
                        key={entry.id}
                        className={entry.type === "income" ? "income-entry" : "expense-entry"}
                    >
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
