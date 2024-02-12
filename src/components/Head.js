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
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-12 cursor-pointer"
          src={hamburgerLink}
          alt="menu"
          onClick={toggleMenuHandler}
        ></img>
        <img className="h-12" src={youtubeLogoLink} alt="youtube"></img>
      </div>
      <div className="relative col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className=" border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
        {showSuggestion && (
          <div className="absolute left-[33%] bg-white m-2 py-3 px-5 w-[36%] rounded-lg border shadow-2xl border-gray-300 text-start">
            <ul>
              {suggestionList.map((s) => (
                <li className="hover:bg-gray-200" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-12" src={userIconLink} alt="user"></img>
      </div>
    </div>
  );
};

export default Head;
