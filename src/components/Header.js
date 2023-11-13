import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";

const Header = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className="flex justify-between m-5 mb-5 shadow-lg">
      <div className="flex">
        <img
          className="w-10 h-10 cursor-pointer"
          alt="menuList"
          src="https://img.icons8.com/ios-glyphs/60/menu--v1.png"
          onClick={()=>toggleMenuHandler()}
        />
        <img
          className="w-28 h-10 ml-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="flex mb-2">
        <input
          className="border border-black rounded-l-full w-80 p-2"
          type="text"
        />
        <button
          className="w-10 h-10 border border-black rounded-r-full"
          type="submit"
        >
          <img
            className=""
            alt="search"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
            
          />
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
