import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";

import BookCard from "./BookCard";

const RecommendedForYou = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex justify-center flex-col gap-5 py-20 sm:px-10 ">
      <h1 className="font-primary text-secondary-regular text-2xl text-semibold">
        Recommended for you
      </h1>
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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8, 16).map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RecommendedForYou;
