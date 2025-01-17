import React, { useState } from "react";

const AddEntry = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
    memo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() });
    setForm({ date: "", category: "", amount: "", type: "expense", memo: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value="{form.date}"
        onChange={handleCange}
        required
      />  
    </form>
  )
}