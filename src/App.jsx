// src/App.jsx
import React from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import TaskForm from "./components/tasks/TaskForm";
import TaskItem from "./components/tasks/TaskItem";
import EditTask from "./components/tasks/EditTask";
import Header from "./components/Header";
import Dashboard from "./components/tasks/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<TaskForm />} />
        <Route path="/task/:id" element={<TaskItem />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/tasks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
