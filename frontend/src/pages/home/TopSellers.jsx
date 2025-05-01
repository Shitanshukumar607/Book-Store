import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

import BookCard from "./BookCard";

const TopSellers = () => {
  const genres = [
    "Choose a genre",
    "Business",
    "Books",
    "Marketing",
    "Horror",
    "Fiction",
    "Adventure",
  ];

  const [selectedCategory, setSelectedCategory] = useState("choose a genre");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log("data is ", data);
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [selectedCategory]);

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
        breakpoints={{
          640: {
            slidesPerView: 1  ,
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
        modules={[Pagination]}
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
