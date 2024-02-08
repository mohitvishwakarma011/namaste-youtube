import { useDispatch } from "react-redux";
import { hamburgerLink, userIconLink, youtubeLogoLink } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Head = ()=>{
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    return(
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-12 cursor-pointer" src={hamburgerLink} alt="menu" onClick={toggleMenuHandler}></img>
                <img className="h-12" src={youtubeLogoLink} alt="youtube"></img>
            </div>
            <div className="col-span-10 text-center">
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
                <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-12" src={userIconLink} alt="user"></img>
            </div>
        </div>
    )
}

export default Head;