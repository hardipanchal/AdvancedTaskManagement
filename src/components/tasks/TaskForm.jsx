import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function TaskForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.push(formData);

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    setFormData({ title: "", description: "", dueDate: "", priority: "" });
    navigate("/");
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add New Task
      </h2>
      <Form
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
}
