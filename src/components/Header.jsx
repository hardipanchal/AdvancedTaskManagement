import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 px-6 shadow-md rounded-lg mb-6 flex-item-center justify-between">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <h1 className=" text-2xl font-semibold ">
        Task Management
      </h1>
      <nav className="space-x-4">
        <Link to='/' className="hover:underline hover:text-yellow-300">Home</Link>
        <Link to='/tasks' className="hover:underline hover:text-yellow-300">Tasks</Link>
      </nav>
      </div>
    </header>
  );
}
