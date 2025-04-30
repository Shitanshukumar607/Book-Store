import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-5 md:gap-20  p-10 rounded-lg">
      <div className=" flex flex-col justify-between h-full gap-10 py-10 items-start text-secondary-regular">
        <p className="font-primary font-medium text-5xl">
          New Releases This Week
        </p>
        <p className="font-primary">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </p>
        <button className="bg-primary-regular text-white font-secondary px-9 py-1.5 rounded-lg">
          Subscribe
        </button>
      </div>
      <img className="" src={bannerImg} alt="banner" srcSet="" />
    </div>
  );
};

export default Banner;
