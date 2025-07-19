import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "./TaskList";
import TaskExcelExport from "../../utils/TaskExcelExport";

export default function Dashboard() {
  const navigate = useNavigate();

  function addHandler() {
    console.log("add button clicked");
    navigate("/add-task");
  }

  return (
    <main className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 ">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Task</h2>
        <div className="flex gap-3">
          <button
            onClick={addHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow"
          >
            Add Task
          </button>
        
      <TaskExcelExport />
      </div>
      </div>
      <TaskList />
    </main>
  );
}
