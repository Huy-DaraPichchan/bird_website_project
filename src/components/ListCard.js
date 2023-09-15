import React from "react";
import StarRating from "../components/Rating";

function ListCard({ item }) {
  return (
    <div className='list-card cursor-pointer font-semibold scale-90 hover:scale-95 hover:ease-in-out'>
      <div className='bg-white p-4 rounded-lg shadow-md card-container flex flex-row justify-between items-center'>
        <div className='w-full flex flex-row items-center'>
          <div className='w-full items-center grid grid-cols-3 gap-4 p-1 mx-2'>
            <h2 className='text-xl mx-2'>{item.name}</h2>
            <StarRating review={item.review} />
            <div className="flex justify-center"> {/* Add a flex container */}
              {item.prices && item.prices.length > 0 ? (
                <span className="bg-green-500 text-white py-2 px-2 m-2 mb-3 rounded-3xl">{item.prices.some(priceOption => priceOption.price === 0) ? "" : "Free / Paid"}</span>
              ) : (
                <span className="bg-red-500 text-white py-2 px-2 m-2 mb-3 rounded-3xl">Pricing not available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
