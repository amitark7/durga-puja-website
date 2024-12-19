import React from "react";
import Slider from "../component/Slider";
import Collection from "../component/Collection";
import Fund from "../component/Fund";
import Event from "../component/Event";
import Gallery from "../component/Gallery";
import Profile from "../component/Profile";

const Home = () => {
  return (
    <>
      <Slider />
      <Collection />
      <Event />
      <Fund />
      <Gallery />
      <Profile />
    </>
  );
};

export default Home;
