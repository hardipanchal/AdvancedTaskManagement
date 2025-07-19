import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import classes from "../../styles/TaskList.module.css";
import FilterTask from "../../utils/FilterTask";
import SortTask from "../../utils/SortTask";
import ProgressBar from "../../utils/ProgressBar";

export default function TaskList() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [sortBy, setSortBy] = useState("");

  function handleFilterChange(type, value) {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  function handleSortChange(value) {
    setSortBy(value);
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) => {
      if (filters.status === "completed" && !task.completed) return false;
      if (filters.status === "pending" && task.completed) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      return true;
    });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (sortBy === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  function handleToggleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const totalTasks = filteredTasks.length;
  const completedTasks = filteredTasks.filter((task) => task.completed).length;

  return (
    <div className={classes.div}>
      <h1 className="text-3xl font-bold text-center text-blue-950 mb-6">
        Task list
      </h1>

      <div className="flex gap-4 justify-center mb-6 flex-wrap">
        <SearchBar onSearch={setSearchTerm} />
        <FilterTask onFilterChange={handleFilterChange} />
        <SortTask onChange={handleSortChange} />
      </div>

      <ProgressBar completed={completedTasks} total={totalTasks} />

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks found</p>
      ) : (
        <ul className="space-y-4">
          {sortedTasks.map((task, index) => (
            <li
              key={index}
              className={`border border-blue-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                task.priority === "high"
                  ? "bg-red-300"
                  : task.priority === "medium"
                  ? "bg-green-300"
                  : task.priority === "low"
                  ? "bg-yellow-300"
                  : "bg-blue-50"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-800">
                {task.title}
              </h3>
              <p className="text-gray-700 mt-1">{task.description}</p>

              <div className="mt-2">
                <p className="text-blue-900 font-medium">Due: {task.dueDate}</p>
              </div>

              {(() => {
                const today = new Date();
                const dueDate = new Date(task.dueDate);

                today.setHours(0, 0, 0, 0);
                dueDate.setHours(0, 0, 0, 0);

                if (!task.completed && dueDate.getTime() === today.getTime()) {
                  return (
                    <p className="text-orange-600 font-semibold mt-2">
                      This task Due Date is Today, so complete it.
                    </p>
                  );
                }

                if (!task.completed && dueDate < today) {
                  return (
                    <p className="text-orange-600 font-semibold mt-2">
                      This task is over due.
                    </p>
                  );
                }

                return null;
              })()}

              <div className="mt-2">
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => handleToggleComplete(index)}
                />
                <label className="ml-2">completed</label>
              </div>

              <p
                className={`mt-1 font-medium ${
                  task.completed ? "text-green-800" : "text-fuchsia-700"
                }`}
              >
                Status: {task.completed ? "Completed" : "Pending"}
              </p>

              <div className="mt-4 flex space-x-4 flex-wrap">
                <button
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => navigate(`/task/${index}`)}
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
