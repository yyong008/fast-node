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
  console.log("data", data);

  const onConnect = () => {};
  const onDisconnect = () => {};
  return (
    <div className="bg-slate-900 w-screen h-100 pb-8">
      <Helmet>
        <title>node 信息</title>
      </Helmet>
      <div className="text-xl text-zinc-100">服务器配置：</div>
      <ContentList data={data.os} />
      <button
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
      </button>
    </div>
  );
};

export default App;
