import React from "react";

export default function FilterTask({ onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        onChange={(event) => onFilterChange("status", event.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        <option value="">All status</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <select
        onChange={(event) => onFilterChange("priority", event.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        <option value="">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
