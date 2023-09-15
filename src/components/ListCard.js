import React from "react";
import StarRating from "../components/Rating";

function ListCard({ item }) {
  const openWebsiteInNewTab = () => {
    if (item.website) {
      window.open(item.website, "_blank");
    }
  };

  return (
    <a
      href={item.website || "#"} // Set a fallback URL if website is not available
      target="_blank"
      rel="noopener noreferrer"
      className='list-card cursor-pointer font-semibold'
      onClick={openWebsiteInNewTab}
    >
      <div className='bg-white p-4 rounded-lg shadow-md card-container flex flex-row justify-between items-center scale-90 hover:scale-100 hover:ease-in-out'>
        <div className='w-full flex flex-row items-center'>
          <div className='w-full items-center grid grid-cols-4 gap-4 p-1 mx-2'>
            <div className='w-48 h-24'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-fit'
              />
            </div>
            <h2 className='text-xl mx-2'>{item.name}</h2>
            <StarRating review={item.review} />
            <div className='flex justify-center'>
              {" "}
              {/* Add a flex container */}
              {item.prices && item.prices.length > 0 ? (
                <span className='bg-green-500 text-white py-2 px-2 m-2 mb-3 rounded-3xl'>
                  {item.prices.some((priceOption) => priceOption.price === 0)
                    ? ""
                    : "Free / Paid"}
                </span>
              ) : (
                <span className='bg-red-500 text-white py-2 px-2 m-2 mb-3 rounded-3xl px-3'>
                    N/A  
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ListCard;
