import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex sm:items-center sm:h-72 sm:justify-center gap-1 sm:gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`/books/${book?.coverImage}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-evenly sm:justify-end sm:px-4 py-2 sm:p-4 gap-4">
          <Link to={`/books/${book._id}`}>
            <h3 className="font-semibold text-base text-secondary-regular">
              {book?.title}
            </h3>
          </Link>
          <p className="text-base text-[#0D084285]">
            {book?.description.length > 100
              ? `${book.description.slice(0, 100)}...`
              : book?.description}
          </p>
          <p className="font-normal font-secondary text-base text-secondary-regular">
            ${book?.newPrice}
            <span className="line-through ml-2 text-[#6C6C6C]">
              ${book?.oldPrice}
            </span>
          </p>
          <button className="bg-primary-regular text-white font-secondary py-1 px-2 w-[115px] sm:w-[150px] text-sm sm:text-base rounded-lg flex justify-center items-center gap-2.5 ">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
