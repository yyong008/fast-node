import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";

// components
import { Helmet } from "react-helmet";
import AppRouter from "./components/Router";

// styles
import "./index.css";

// hook
import useSocket from "./useSocket";

const App = () => {
  const [data, setData] = useSocket();
  return (
    <div className=" w-screen h-100 pb-8 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <Helmet>
        <title>node 信息</title>
      </Helmet>
      <div className="flex item-center w-screen  h-14 border-b bg-slate-50">
        <div className="flex py-2 h-14 w-28 justify-center items-center text-lg">导航配置：</div>
        <Link to="/" className="flex justify-center items-center mx-2 hover:text-orange-300">首页</Link>
        <Link to="/process" className="flex justify-center items-center hover:text-orange-300">进程</Link>
      </div>

      <AppRouter data={data.os}/>
      <Outlet />
      
    </div>
  );
};

export default App;
