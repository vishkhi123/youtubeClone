import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEO,
} from "../utilities/constants";
import { cacheResults } from "../utilities/searchSlice";
import { searchResults } from "../utilities/videoSearchSlice";
import VideoCard from "./VideoCard";
import { toggleSearch } from "../utilities/videoSearch";


const Header = () => {
  const searchCache = useSelector((store) => store.search);
  

  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowSuggetions] = useState(true);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [searchedVideos,setSearchedVideos]=useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getSearchedVidoes();
  }, [searchQuery]);

  const getSearchedVidoes = async () => {
    try {
      const searchedVidoes = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchQuery+ "&maxResults=25&key=AIzaSyDP1eLB6jj2GRzyN73imLACHy_rouogykw");
      const json = await searchedVidoes.json();
      console.log("Searched Video:", json);
      setSearchedVideos(json);

      dispatch(
        searchResults({
          [searchedVideos]:[json]
        })
      )
      
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 api calls is <200 ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggetions(searchCache[searchQuery]);
      } else {
        getSearchSuggetions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggetions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleSearchHandler=()=>{
    dispatch(toggleSearch());
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
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
          <button
            className=" border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100"
            type="submit"
            value={clickedSearch}
            onClick={() => toggleSearchHandler()}
          >
            🔍
          </button>
        </div>
        {showSuggetions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggetions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
