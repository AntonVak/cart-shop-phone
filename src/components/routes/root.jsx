import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
