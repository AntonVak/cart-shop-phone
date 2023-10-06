import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div >
        <Outlet />
      </div>
    </>
  );
};

export default Root;
