import React, { useState } from "react";

const Filter = ({ onSearch }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ startDate, endDate, type, category });
  };

  return (
    <div>
      <h3>필터링</h3>
      <label>
        시작 날짜:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        종료 날짜:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        유형:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">전체</option>
          <option value="income">수입</option>
          <option value="expense">지출</option>
        </select>
      </label>
      <label>
        카테고리:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Filter;
