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
    <form onSubmit={handleSubmit}>
      <h3>항목 추가</h3>
      <label>
        날짜:
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </label>
      <label>
        카테고리:
        <input type="text" name="category" value={form.category} onChange={handleChange} required />
      </label>
      <label>
        금액:
        <input type="number" name="amount" value={form.amount} onChange={handleChange} required />
      </label>
      <label>
        유형:
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </label>
      <label>
        메모:
        <textarea name="memo" value={form.memo} onChange={handleChange}></textarea>
      </label>
      <button type="submit">항목 추가</button>
    </form>
  );
};

export default AddEntry;
