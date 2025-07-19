import React from "react";

export default function SortTask({ onChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        onChange={(event) => onChange(event.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        <option value="">Sort by</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}
