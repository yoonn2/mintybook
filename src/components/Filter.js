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
    <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-200 mb-3">🔍 필터링</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 시작 날짜 */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">시작 날짜</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
        </div>

        {/* 종료 날짜 */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">종료 날짜</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
        </div>

        {/* 유형 선택 */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">유형</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          >
            <option value="">전체</option>
            <option value="income">수입</option>
            <option value="expense">지출</option>
          </select>
        </div>

        {/* 카테고리 입력 */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">카테고리</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="예: 월세, 식비"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default Filter;
