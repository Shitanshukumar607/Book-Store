import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import RecommendedForYou from "./RecommendedForYou";

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
