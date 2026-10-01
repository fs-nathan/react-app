import { CATEGORIES } from "./data";

export default function Filter({ filter, setFilter }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 12 }}>
      <div
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Filter
      </div>
      <div
        style={{ width: "100%", display: "flex", gap: 0, flexDirection: "row" }}
      >
        <input
          style={{ flex: 2, height: 42, fontSize: 20 }}
          placeholder="Search"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
        <select
          style={{ flex: 1, height: 48, fontSize: 20 }}
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          style={{ flex: 1, height: 48, fontSize: 20 }}
          value={filter.isCompleted}
          onChange={(e) =>
            setFilter({ ...filter, isCompleted: e.target.value })
          }
        >
          <option value="All">All Status</option>
          <option value={true}>Completed</option>
          <option value={false}>Pending</option>
        </select>
      </div>
    </div>
  );
}
