import React, { useState, useEffect } from "react";
import "./styles/App.css";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";
import Stats from "./components/Stats";
import CalendarComponent from "./components/CalendarComponent";
import DetailsComponent from "./components/DetailsComponent";

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries"));
    return savedEntries || [];
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    try {
      console.log("저장 중:", entries); // 디버깅 로그
      localStorage.setItem("entries", JSON.stringify(entries));
    } catch (error) {
      console.error("로컬 스토리지 저장 오류:", error);
    }
  }, [entries]);

  // 항목 추가 처리
  const handleAddEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries,entry]); // 기존 항목에 새 항목 추가
  };

  // 항목 삭제 처리
  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  // 달력에서 날짜 선택 처리
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>MintyBook</h1>
      <AddEntry onAdd={handleAddEntry} />
      <CalendarComponent entries={entries} onDateSelect={handleDateSelect} />
      <DetailsComponent date={selectedDate} entries={entries} />
      <EntryList entries={entries} onDelete={handleDeleteEntry} />
      <Stats entries={entries} />
    </div>
  );
}

export default App;
