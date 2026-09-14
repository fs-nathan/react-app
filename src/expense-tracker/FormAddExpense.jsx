import { useState } from "react";

function FormAddExpense({ onAddExpense }) {
  const [formData, setFormData] = useState({ name: "", amount: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid white",
        }}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid white",
        }}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onAddExpense(formData.name, formData.amount);
          setFormData({ name: "", amount: 0 });
        }}
        disabled={!formData.name || !formData.amount}
      >
        Add Expense
      </button>
    </div>
  );
}

export default FormAddExpense;
