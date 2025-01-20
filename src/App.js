import React, { useState } from "react";
import "./styles/App.css";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";
import Stats from "./components/Stats";

function App() {
  const [entries, setEntries] = useState([]);
  // 데이터 추가하는 함수
  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]); // 기존 항목에 새 항목 추가
    console.log("새 항목:", entry); // 콘솔에서 확인
  };
  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  }
  return (
    <div>
      <h1>MintyBook</h1>
      <AddEntry onAdd={handleAddEntry} />
      <EntryList entries={entries} onDelete={handleDeleteEntry} />
      <Stats entries={entries} />
    </div>
  );
}

export default App;
