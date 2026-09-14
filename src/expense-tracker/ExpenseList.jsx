function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          style={{ border: "1px solid white", padding: "10px" }}
        >
          {expense.name} - {expense.amount}
          <button
            onClick={() => onDeleteExpense(expense.id)}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
