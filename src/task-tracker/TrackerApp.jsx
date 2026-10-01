import { useEffect, useState } from "react";
import Filter from "./Filter";
import TrackerForm from "./TrackerForm";
import TrackerList from "./TrackerList";
import { DEFAULT_TASKS } from "./data";

export default function TrackerApp() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [filter, setFilter] = useState({
    search: "",
    category: "All",
    isCompleted: "All",
  });

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleItemChecked = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  useEffect(() => {
    let filteredTasks = [...DEFAULT_TASKS];
    if (filter.search) {
      filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(filter.search.toLowerCase()),
      );
    }

    if (filter.category && filter.category !== "All") {
      filteredTasks = filteredTasks.filter(
        (task) => task.category === filter.category,
      );
    }

    if (filter.isCompleted && filter.isCompleted !== "All") {
      switch (filter.isCompleted) {
        case "true":
          filteredTasks = filteredTasks.filter((task) => task.isCompleted);
          break;
        case "false":
          filteredTasks = filteredTasks.filter((task) => !task.isCompleted);
          break;
        default:
          break;
      }
    }

    setTasks(filteredTasks);
  }, [filter]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ flex: 1, height: "100%", borderRight: "1px solid #ccc" }}>
        <TrackerList tasks={tasks} onItemChecked={handleItemChecked} />
      </div>

      <div style={{ flex: 1, height: "100%" }}>
        <TrackerForm onAddTask={handleAddTask} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}
