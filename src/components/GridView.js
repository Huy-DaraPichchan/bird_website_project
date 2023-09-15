import React from "react";
import Card from "./Card";

function GridView({ data, itemsPerPage, currentPage }) {
  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the cards to display on the current page
  const visibleCards = data.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {visibleCards.map((item, index) => (
        <Card
          key={index}
          item={item}
          isVisible={visibleCards.length === itemsPerPage}
        />
      ))}
    </div>
  );
}

export default GridView;
