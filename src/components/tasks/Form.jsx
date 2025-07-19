import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-md font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Task Title"
          required
          onChange={props.handleChange}
          value={props.formData.title}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-3"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-md font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          name="description"
          placeholder="Task Description"
          required
          onChange={props.handleChange}
          value={props.formData.description}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-3"
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="priority"
          className="text-md font-medium text-gray-700 mb-1"
        >
          Priority
        </label>
        <select
          name="priority"
          placeholder="task priority"
          required
          onChange={props.handleChange}
          value={props.formData.priority}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-3"
        >
          <option value="">choose priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>

        </select>
      </div>

      <div className="flex flex-col">
      <label
          htmlFor="dueDate"
          className="text-md font-medium text-gray-700 mb-1"
        >
          Due Date
        </label>
        <input
          name="dueDate"
          type="date"
          placeholder="Due date"
          required
          onChange={props.handleChange}
          value={props.formData.dueDate}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-3"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md items-center justify-center"
      >
        submit
      </button>
    </form>
  );
}
