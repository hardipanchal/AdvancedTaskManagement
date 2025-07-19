import React, { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default function EditTask() {
  const navigate = useNavigate();
  const editTask = JSON.parse(localStorage.getItem("editTask"));
  const [formData, setFormData] = useState({
    title: editTask?.title || "",
    description: editTask?.description || "",
    dueDate: editTask?.dueDate || '',
    priority: editTask?.priority || '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editTask?.index !== undefined) {
      tasks[editTask.index] = {
        ...tasks[editTask.index],
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        priority: formData.priority
      };

      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.removeItem("editTask");
    }

    navigate("/");
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Edit Task
        </h1>
        <Form
          onSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}
