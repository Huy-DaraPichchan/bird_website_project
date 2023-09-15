import React from "react";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";

function ViewMode({ onViewModeChange }) {
  return (
    <div className="flex items-center justify-end space-x-4 py-3 mr-3">
      <button
        className="text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => onViewModeChange("showAll")}
      >
        <BsGrid3X3GapFill />
      </button>
      <button
        className="text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => onViewModeChange("row")}
      >
        <BsListUl />
      </button>
    </div>
  );
}

export default ViewMode;
