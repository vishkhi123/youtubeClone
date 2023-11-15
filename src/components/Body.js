import { Outlet } from "react-router-dom";
import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";
import SlideBar from "./SlideBar";
import WatchPage from "./WatchPage";

const Body = () => {
  return (
    <div className="flex">
      <SlideBar />
      <Outlet/>
      {/* <MainContainer />
      <WatchPage/> */}
    </div>
  );
};
export default Body;
