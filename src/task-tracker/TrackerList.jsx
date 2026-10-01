import TrackerItem from "./TrackerItem";

export default function TrackerList({ tasks, onItemChecked }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {tasks.map((task) => (
        <TrackerItem key={task.id} task={task} onItemChecked={onItemChecked} />
      ))}
    </div>
  );
}
