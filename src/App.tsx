import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
// components
import { Helmet } from "react-helmet";
import AppRouter from "./components/Router";
import MainNav from "./components/MainNav";
// styles
import "./index.css";

const App = () => {
  return (
    <div className=" w-screen h-100 pb-8 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <Helmet>
        <title>node 信息</title>
      </Helmet>
      <MainNav />
      <AppRouter />
      <Outlet />
    </div>
  );
};

export default App;
