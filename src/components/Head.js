import { useDispatch, useSelector } from "react-redux";
import {
  YOUTUBE_SUGGESTION_API,
  hamburgerLink,
  userIconLink,
  youtubeLogoLink,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestionList(searchCache[searchText]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
    const json = await data.json();

    setSuggestionList(json[1]);

    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  return (
    <div className="fixed w-full z-20 grid grid-flow-col p-3  mb-2 shadow-lg bg-white">
      <div className="flex col-span-1 items-center">
        <img
          className="h-12 cursor-pointer"
          src={hamburgerLink}
          alt="menu"
          onClick={toggleMenuHandler}
        ></img>
        <img className="h-14" src={youtubeLogoLink} alt="youtube"></img>
      </div>
      <div className="relative col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 py-2 px-4 rounded-l-full"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={() => setShowSuggestion(!showSuggestion)}
          
        />
        <button className=" border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
        {showSuggestion && (
          <ul className="absolute left-[23%] bg-white w-[49%] rounded-lg shadow-2xl shadow-gray-800 text-start py-1 cursor-pointer ">
            {suggestionList?.map((s) => (
              <Link to={"/results?search_query="+s} key={s}>
                <li className="hover:bg-gray-200 py-1 px-2">🔍 {s}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-10" src={userIconLink} alt="user"></img>
      </div>
    </div>
  );
};

export default Head;
