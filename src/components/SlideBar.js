import React from "react";
import { useSelector } from "react-redux";

const SlideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen) return null;
  return (
    <div className="w-48 p-5 shadow-lg">
      <div className="mt-5">
        <h1>Home</h1>
        <h1>Shots</h1>
        <h1>Substriptions</h1>
      </div>
      <div className="mt-5">
        <h1>Substriptions</h1>
        <h3>Cricket</h3>
        <h3>Bhuvan Bham</h3>
        <h3>Akshay Shahani</h3>
        <h3>Sony</h3>
      </div>
      <div className="mt-5">
        <h1>Explore</h1>
        <h3>Treanding</h3>
        <h3>Shopping</h3>
        <h3>Music</h3>
        <h3>Go Live</h3>
      </div>
    </div>
  );
};

export default SlideBar;
