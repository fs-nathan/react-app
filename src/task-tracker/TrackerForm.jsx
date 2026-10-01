import { useState } from "react";
import { CATEGORIES, PRIORITIES } from "./data";

export default function TrackerForm({ onAddTask }) {
  const [form, setForm] = useState({
    title: "",
    category: CATEGORIES[0],
    priority: PRIORITIES[0],
    duration: undefined,
  });

  return (
    <div style={{ width: "100%", border: "1px solid #ccc" }}>
      <div
        style={{
          height: 48,
          textAlign: "center",
          fontSize: 24,
          paddingTop: 10,
          fontWeight: "bold",
        }}
      >
        Tracker Form
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form:", form);
          onAddTask(form);
          setForm({
            title: "",
            category: CATEGORIES[0],
            priority: PRIORITIES[0],
            duration: 0,
          });
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={{ height: 48, fontSize: 20 }}
            required
          />
          <input
            type="number"
            placeholder="Duration"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            style={{ height: 48, fontSize: 20 }}
            required
          />
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            style={{ height: 48, padding: 10, fontSize: 20 }}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            style={{ height: 48, padding: 10, fontSize: 20 }}
          >
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
          <button
            type="submit"
            style={{ height: 48, fontSize: 20, cursor: "pointer" }}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
