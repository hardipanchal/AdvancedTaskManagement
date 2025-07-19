import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="search by title"
      onChange={(e) => onSearch(e.target.value)}
      className="border px-4 py-2 rounded-md w-full mb-4"
    />
  );
}
