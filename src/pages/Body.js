import React, { useState } from "react";
import ViewMode from "../components/Viewmode";
import { dummyData } from "../dummyData";
import "../style/Body.css"; // Import the CSS file for animations
import GridView from "../components/GridView";
import ListView from "../components/ListView";

function Body() {
  const [sortBy, setSortBy] = useState(""); // State to store sorting option
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const itemsPerPage = 6; // Number of cards to display per page
  const [viewMode, setViewMode] = useState("grid"); // Initial view mode

  // Function to sort the dummy data based on the selected option
  const sortData = () => {
    if (sortBy === "popularity") {
      // Sort by review in descending order (highest rating on top)
      return dummyData.slice().sort((a, b) => a.review - b.review);
    } else if (sortBy === "newArrival") {
      // Sort by some criteria for new arrivals (You need to define your own logic)
      return dummyData.slice().sort((a, b) => a.date - b.date);
    } else {
      // Default order if no sorting option is selected
      return dummyData;
    }
  };

  // Get the sorted data
  const sortedData = sortData();

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // Function to toggle the view mode between "grid" and "list"
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-centerm">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Filter: </h1>
            </div>
            <div>
              {/* Button for Popularity Order */}
              <button
                onClick={() => {
                  setSortBy("popularity");
                  setCurrentPage(1); // Reset to the first page when changing the sorting option
                }}
                className={`${
                  sortBy === "popularity"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-4 py-2 rounded-md m-2`}
              >
                Popularity Order
              </button>

              {/* Button for New Arrival Order */}
              <button
                onClick={() => {
                  setSortBy("newArrival");
                  setCurrentPage(1); // Reset to the first page when changing the sorting option
                }}
                className={`${
                  sortBy === "newArrival"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-4 py-2 rounded-md m-2`}
              >
                New Arrival Order
              </button>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-500 my-4" />
          <ViewMode onViewModeChange={toggleViewMode} viewMode={viewMode} />
          {viewMode === "grid" ? (
            <GridView data={sortedData} itemsPerPage={itemsPerPage} currentPage={currentPage} />
          ) : (
            <ListView data={sortedData} itemsPerPage={itemsPerPage} currentPage={currentPage} />
          )}
          {/* Add indicator for navigation here */}
          <div className="flex justify-center mt-4">
            {Array(totalPages)
              .fill()
              .map((_, page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page + 1)}
                  className={`${
                    currentPage === page + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } px-4 py-2 rounded-md m-2`}
                >
                  {page + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
