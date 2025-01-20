import React, { useState } from "react";

const AddEntry = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense", // 지출
    memo: "",
    isRecurring: false, // 반복 아님
    recurrenceInterval: "monthly", // 월간 반복
  });
// 입력값 변경 처리
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm({ ...form, [name]: type === "checkbox" ? checked : value });
};

// 제출 처리
const handleSubmit = (e) => {
  e.preventDefault();
  onAdd({ ...form, id: Date.now() });
  setForm({
    date: "", 
    category: "", 
    amount: "", 
    type: "", 
    memo: "",
    isRecurring: false,
    recurrenceInterval: "monthly",
  });
};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          날짜:
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          카테고리:
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="예: 월세, 식비"
            required
          />
        </label>
      </div>
      <div>
        <label>
          금액:
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="예: 10000"
            required
          />
        </label>
      </div>
      <div>
        <label>
          유형:
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="expense">지출</option>
            <option value="income">수입</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          메모:
          <textarea
            name="memo"
            value={form.memo}
            onChange={handleChange}
            placeholder="메모를 추가하세요 (선택 사항)"
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isRecurring"
            checked={form.isRecurring}
            onChange={handleChange}
          />
          반복 항목
        </label>
        {form.isRecurring && (
          <select
            name="recurrenceInterval"
            value={form.recurrenceInterval}
            onChange={handleChange}
          >
            <option value="daily">매일</option>
            <option value="weekly">매주</option>
            <option value="monthly">매월</option>
            <option value="yearly">매년</option>
          </select>
        )}
      </div>
      <button type="submit">항목 추가</button>
    </form>
  );
};

export default AddEntry;