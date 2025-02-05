import React, { useState } from "react";

const AddEntry = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense", // 기본값: 지출
    memo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() });
    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
      memo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="카테고리 (예: 월세, 식비)"
        className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="금액 입력"
        className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
      >
        <option value="expense">지출</option>
        <option value="income">수입</option>
      </select>

      <textarea
        name="memo"
        value={form.memo}
        onChange={handleChange}
        placeholder="메모 (선택 사항)"
        className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 w-full"
      >
        항목 추가
      </button>
    </form>
  );
};

export default AddEntry;
