import React, { useState } from "react";
import { dummyData } from "../dummyData";
import Card from "../components/Card";

function Body() {
  const [sortBy, setSortBy] = useState(""); // State to store sorting option
  const [currentPage, setCurrentPage] = useState(1); // State to store the current page
  const cardsPerPage = 6; // Number of cards to display per page

  // Function to sort the dummy data based on the selected option
  const sortData = () => {
    if (sortBy === "popularity") {
      const sortedData = dummyData.slice().sort((a, b) => a.review - b.review);
      return sortedData;
    } else if (sortBy === "newArrival") {
      const sortedData = dummyData.slice().sort((a, b) => a.date - b.date);
      return sortedData;
    } else {
      return dummyData;
    }
  };

  // Get the sorted data
  const sortedData = sortData();

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedData.length / cardsPerPage);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Get the cards to display for the current page
  const cardsToDisplay = sortedData.slice(startIndex, endIndex);

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Filter: </h1>
            </div>
            <div>
              {/* Button for Popularity Order */}
              <button
                onClick={() => setSortBy("popularity")}
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
                onClick={() => setSortBy("newArrival")}
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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {cardsToDisplay.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-4 py-2 rounded-md m-2`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
