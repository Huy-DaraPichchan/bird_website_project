import React, { useState } from "react";
import StarRating from "../components/Rating";
import "../style/Card.css";

function Card({ item }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const openWebsite = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer card-container transition-transform transform scale-90 md:hover:scale-100 ease-in-out ${
        expanded ? "expanded" : ""
      }`}
      onClick={toggleExpanded}
    >
      <div className="w-full h-48 md:h-64 lg:h-72 xl:h-96">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold my-2 md:my-4">
        {item.name}
      </h2>
      <div className="flex justify-start pb-2 md:pb-3 mt-2 md:mt-3 mb-2 md:mb-4">
        <StarRating review={item.review} />
      </div>
      <p
        className={`text-sm md:text-base text-gray-600 ${
          expanded ? "expanded" : ""
        }`}
      >
        {item.description}
      </p>
      {expanded && (
        <div className="mt-2 md:mt-4">
          {/* Additional information, e.g., pricing */}
          {item.prices && item.prices.length > 0 ? (
            <div>
              <h1 className="font-bold text-sm md:text-base">
                Pricing:
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                {item.pricing}
              </p>
              {/* Grid to display pricing options */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 mt-2 bg-gray-200 p-2 rounded">
                {item.prices.map((priceOption, index) => (
                  <div key={index} className="text-center">
                    <p className="font-semibold text-sm md:text-base">
                      {priceOption.title}
                    </p>
                    <p className="text-sm md:text-base">
                      {priceOption.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm md:text-base text-red-600 font-bold mt-2">
              Pricing is not available
            </p>
          )}
          {/* You can add more details here */}
          <div className="flex flex-wrap items-baseline text-sm md:text-base text-gray-600 mt-2 p-2">
            <h1 className="font-bold text-sm md:text-base">Categories:</h1>
            <div className="flex flex-wrap mt-2">
              {item.categories.map((categ, index) => (
                <span
                  key={index}
                  className="bg-blueCustom text-white py-2 px-2 m-1 md:m-2 mb-2 md:mb-3 rounded-md block"
                >
                  {categ.name}
                </span>
              ))}
            </div>
          </div>
          {/* "Learn More" button that opens the website in a new tab */}
          {item.website && (
            <button
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
              onClick={() => openWebsite(item.website)}
            >
              Learn More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
