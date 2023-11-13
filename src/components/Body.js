import ButtonList from "./ButtonList";
import MainContainer from "./MainContainer";
import SlideBar from "./SlideBar";

const Body=()=>{

    return(
        <div className="flex">
            
            <SlideBar/>
            <div>
            <MainContainer/>

            </div>
            
        </div>

    );



}
export default Body;