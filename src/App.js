import React, { useState, useEffect } from "react";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";
import Stats from "./components/Stats";
import CalendarComponent from "./components/CalendarComponent";
import DetailsComponent from "./components/DetailsComponent";
import Filter from "./components/Filter";

function App() {


  const [entries, setEntries] = useState(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries"));
    return savedEntries || [];
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const [filter, setFilter] = useState({
    date: "",
    type: "",
    category: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  // 필터링된 항목 계산
  const filteredEntries = entries.filter((entry) => {
    const matchesDate = !filter.date || entry.date === filter.date;
    const matchesType = !filter.type || entry.type === filter.type;
    const matchesCategory =
      !filter.category || entry.category.includes(filter.category);

    return matchesDate && matchesType && matchesCategory;
  });
  useEffect(() => {
    console.log("📅 필터링 조건:", filter);
    console.log("🔍 필터링된 내역:", filteredEntries);
  }, [filter, entries]);

  // 항목 추가 처리
  const handleAddEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  // 항목 삭제 처리
  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  // 달력에서 날짜 선택 처리
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFilterSearch = ({ date, type, category }) => {
    setFilter({ date, type, category });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 shadow-2xl rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-100 text-center mb-6">📊 MintyBook 가계부</h1>
        {/* 카드 스타일 적용 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-200 mb-3">💰 항목 추가</h2>
            <AddEntry onAdd={handleAddEntry} />
          </div>

          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-200 mb-3">🔎 필터</h2>
            <Filter onSearch={handleFilterSearch} />
          </div>

          <div className="bg-gray-700 p-5 rounded-lg shadow-lg col-span-2">
            <h2 className="text-lg font-semibold text-gray-200 mb-3">📅 캘린더</h2>
            <CalendarComponent entries={entries} onDateSelect={handleDateSelect} />
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg col-span-2">
            <DetailsComponent date={selectedDate} entries={filteredEntries} />
          </div>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg col-span-2">
            <h2 className="text-lg font-semibold text-gray-200 mb-3">📋 내역</h2>
            <EntryList entries={filteredEntries} onDelete={handleDeleteEntry} />
          </div>

          <div className="bg-gray-700 p-5 rounded-lg shadow-lg col-span-2">
            <h2 className="text-lg font-semibold text-gray-200 mb-3">📈 통계</h2>
            <Stats entries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
