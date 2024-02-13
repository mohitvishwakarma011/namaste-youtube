import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import Head from "./Head";

const Body = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
