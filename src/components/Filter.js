import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <h3>필터링</h3>
      <label>
        날짜:
        <input
          type="date"
          name="date"
          onChange={(e) => onFilterChange("date", e.target.value)}
        />
      </label>
      <label>
        유형:
        <select name="type" onChange={(e) => onFilterChange("type", e.target.value)}>
          <option value="">전체</option>
          <option value="income">수입</option>
          <option value="expense">지출</option>
        </select>
      </label>
      <label>
        카테고리:
        <input
          type="text"
          name="category"
          placeholder="예: 식비"
          onChange={(e) => onFilterChange("category", e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
