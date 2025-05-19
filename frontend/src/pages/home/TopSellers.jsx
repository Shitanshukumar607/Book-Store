import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination, Autoplay } from "swiper/modules";

import BookCard from "./BookCard";
import { useFetchAllBooksQuery } from "@/redux/books/booksApi";

const genres = [
  "Choose a genre",
  "Business",
  "Books",
  "Marketing",
  "Horror",
  "Fiction",
  "Adventure",
];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  const { data: apiData, isLoading, error } = useFetchAllBooksQuery();

  if (isLoading)
    return (
      <div className="flex justify-center flex-col gap-5 px-5 sm:px-10 ">
        <h1 className="font-primary text-secondary-regular text-2xl text-semibold">
          Top Sellers
        </h1>
        <h1 className="font-primary text-secondary-regular text-xl text-semibold">
          Loading...
        </h1>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center flex-col gap-5 px-5 sm:px-10 ">
        <h1 className="font-primary text-secondary-regular text-2xl text-semibold">
          Top Sellers
        </h1>
        <h1 className="font-primary text-secondary-regular text-xl text-semibold">
          Failed to load. Please try again later.
        </h1>
      </div>
    );

  const books = apiData?.data ?? [];

  console.log("List of books:", books);

  const filteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter((book) => {
          return book.genre === selectedCategory;
        });

  const handleChange = (event) => {
    setSelectedCategory(event.target.value.toLowerCase());
  };

  const allOptions = genres.map((genre, i) => {
    return (
      <option key={i} value={genre.toLowerCase()}>
        {genre}
      </option>
    );
  });

  return (
    <div className="flex justify-center flex-col gap-5 px-5 sm:px-10 ">
      <h1 className="font-primary text-secondary-regular text-2xl text-semibold">
        Top Sellers
      </h1>
      <select
        className="w-40 sm:w-50 h-9 bg-[#EAEAEAE5] text-sm sm:text-base rounded-md p-2 text-start text-secondary-regular font-primary"
        name="top-sellers"
        id="top-sellers"
        onChange={handleChange}
      >
        {allOptions}
      </select>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
