import React from "react";
import * as XLSX from "xlsx";

export default function TaskExcelExport() {
  const handleExport = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const workSheet = XLSX.utils.json_to_sheet(tasks);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "Tasks");

    XLSX.writeFile(workBook, "Tasks.xlsx");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow"
    >
      Export to Excel
    </button>
  );
}
