import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function TaskItem() {
  const { id } = useParams();

  const navigate = useNavigate();
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  const index = parseInt(id);
  const task = tasks[index];

  if (!task)
    return (
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow text-center">
        <p className="text-red-500 font-medium">Task not found</p>
      </div>
    );

  function handleDelete(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task ? "
    );
    if (!confirmDelete) return;

    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/");
  }

  function handleEdit(index) {
    localStorage.setItem("editTask", JSON.stringify({ ...task, index }));
    navigate("/edit-task/" + index);
  }

  return (
    <div
      className={`border border-blue-200 w-full max-w-2xl p-6 rounded-lg shadow ${
        task.priority === "high"
          ? "bg-red-300"
          : task.priority === "medium"
          ? "bg-green-300"
          : task.priority === "low"
          ? "bg-yellow-300"
          : "bg-blue-50"
      }`}
    >
      <h3 className="text-2xl font-semibold text-blue-800">{task.title}</h3>
      <p className="text-gray-700 mt-4">{task.description}</p>

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

      <p
        className={`mt-4 font-medium ${
          task.completed ? "text-green-800" : "text-fuchsia-700"
        }`}
      >
        Status: {task.completed ? "Completed" : "Pending"}{" "}
      </p>

      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
