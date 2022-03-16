import React, { useEffect, useRef, useState } from "react";

// components
import { Helmet } from "react-helmet";
import ContentList from "./components/ContentList";

// styles
import "./index.css";

// hook
import useSocket from "./useSocket";

const App = () => {
  const [data, setData] = useSocket();

  const onConnect = () => {};
  const onDisconnect = () => {};
  return (
    <div className=" w-screen h-100 pb-8 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <Helmet>
        <title>node 信息</title>
      </Helmet>
      <div className="w-screen  h-14 border-b bg-slate-50">
        <div className="flex py-2 h-14 w-28 justify-center items-center text-lg">服务器配置：</div>
      </div>
      <ContentList data={data.os} />
      {/* <button
        onClick={onConnect}
        className="box-border flex w-10/12 justify-center  font-serif py-4 mb-8 m-auto rounded-sm bg-green-500 text-black-300 text-sm"
      >
        链接
      </button>
      <button
        onClick={onDisconnect}
        className="box-border flex w-10/12 justify-center  font-serif py-4 m-auto rounded-sm bg-cyan-500 text-black-300 text-sm"
      >
        断开链接
      </button> */}
    </div>
  );
};

export default App;
