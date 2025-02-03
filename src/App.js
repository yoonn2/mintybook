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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">MintyBook</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <AddEntry onAdd={handleAddEntry} />
        <Filter onSearch={handleFilterSearch} />
        <CalendarComponent entries={entries} onDateSelect={handleDateSelect} />
        <DetailsComponent date={selectedDate} entries={filteredEntries} />
        <EntryList entries={filteredEntries} onDelete={handleDeleteEntry} />
        <Stats entries={entries} />
      </div>
    </div>
  );
}

export default App;
