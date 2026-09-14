import { useState } from "react";
import ExpenseList from "./ExpenseList";
import FormAddExpense from "./FormAddExpense";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const onDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const onAddExpense = (name, amount) => {
    setExpenses([
      ...expenses,
      { id: new Date().getTime(), name, amount: +amount },
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h1>
        Tổng chi tiêu:{" "}
        {expenses.reduce((total, expense) => total + expense.amount, 0)}
      </h1>
      <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
      <FormAddExpense onAddExpense={onAddExpense} />
    </div>
  );
}

export default ExpenseTracker;
