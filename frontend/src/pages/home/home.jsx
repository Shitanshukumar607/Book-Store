import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import RecommendedForYou from "./Recommended-for-you";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <RecommendedForYou />
    </div>
  );
};

export default Home;
