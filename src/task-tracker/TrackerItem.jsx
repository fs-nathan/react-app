export default function TrackerItem({ task, onItemChecked }) {
  return (
    <div
      style={{
        width: "100%",
        height: 96,
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "left",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {task.title}
      </div>
      <div style={{ display: "flex", gap: 30 }}>
        <span>Category: {task.category}</span>
        <span>Priority: {task.priority}</span>
        <span>Duration: {task.duration} minutes</span>
        <label>
          Completed:
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onItemChecked(task.id)}
          />
        </label>
      </div>
    </div>
  );
}
