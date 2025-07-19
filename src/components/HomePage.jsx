import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleButtonclick = () => {
    navigate("/tasks");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/public/home.jpg.png"
        alt="Home"
        className="w-full h-full brightness-50 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="px-4 py-2 bg-white bg-opacity-90 text-black text-lg rounded-lg hover:bg-opacity-100 shadow-lg"
          onClick={handleButtonclick}
        >
          Tasks
        </button>
      </div>
    </div>
  );
}
