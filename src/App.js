import React, { useState, useEffect } from "react";
import "./styles/App.css";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";
import Stats from "./components/Stats";
import CalendarComponent from "./components/CalendarComponent";
import DetailsComponent from "./components/DetailsComponent";

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // 항목 추가 처리
  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]); // 기존 항목에 새 항목 추가
    console.log("새 항목:", entry); // 콘솔에서 확인
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
