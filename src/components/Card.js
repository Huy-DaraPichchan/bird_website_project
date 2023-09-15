import React, { useState } from "react";
import Rating from "../components/Rating";
import "../style/Card.css";

function Card({ item }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md card-container ${
        expanded ? "expanded" : ""
      }`}
      onClick={toggleExpanded}
    >
      <div className='w-full h-128'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-full object-fit'
        />
      </div>
      <h2 className='text-xl font-semibold my-4'>{item.name}</h2>
      <div className='flex justify-start pb-3 mt-3 mb-4'>
        <Rating review={item.review} />
      </div>
      <p className={`text-base text-gray-600 ${expanded ? "expanded" : ""}`}>
        {item.description}
      </p>
      {expanded && (
        <div className="mt-4">
          {/* Additional information, e.g., pricing */}
          {item.prices && item.prices.length > 0 ? (
            <div>
              <h1 className='font-bold'>Pricing: </h1>
              <p className='text-base text-gray-600 mt-2'>
                 {item.pricing}
              </p>
              {/* Grid to display pricing options */}
              <div className='grid grid-cols-3 gap-4 mt-2 bg-gray-200 p-2 rounded'>
                {item.prices.map((priceOption, index) => (
                  <div key={index} className='text-center'>
                    <p className='font-semibold'>{priceOption.title}</p>
                    <p>{priceOption.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className='text-base text-red-600 font-bold mt-2'>
              Pricing is not available
            </p>
          )}
          {/* You can add more details here */}
          <div className='flex flex-wrap items-baseline text-base text-gray-600 mt-2 p-2'>
            <h1 className='font-bold'>Categories: </h1>
            <div className='flex flex-wrap mt-2'>
              {item.categories.map((categ, index) => (
                <span
                  key={index}
                  className='bg-blueCustom text-white py-2 px-2 m-2 mb-3 rounded-md block'
                >
                  {categ.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
