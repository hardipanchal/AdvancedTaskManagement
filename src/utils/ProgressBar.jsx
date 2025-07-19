import React from "react";

export default function ProgressBar({ completed, total }) {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full mb-4">
      <progress className="w-full h-4" value={completed} max={total}></progress>
      <p className="text-sm text-gray-700 mt-1 text-center">
        {completed} of {total} tasks completed ({Math.round(percentage)}%){" "}
      </p>
    </div>
  );
}
