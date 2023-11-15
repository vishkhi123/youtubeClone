import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="w-10 h-10 cursor-pointer"
          alt="menuList"
          src="https://img.icons8.com/ios-glyphs/60/menu--v1.png"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="w-28 h-10 ml-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button
          className=" border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100"
          type="submit"
        >
          🔍
        </button>
      </div>
      <div>
        <img
          className="w-10 h-10"
          alt="account"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSsHb1Ty42_g6zN1tnTiywo-TVKOayGaB5nV33DZsChhI00tFflshZJAvQkkeuXeeicA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
