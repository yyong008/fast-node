import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  let timer = useRef();
  const [data, setData] = useState({ os: [] });

  useEffect(() => {
    var socket = io("http://localhost:9000", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    socket.on("message", (msg) => {
      setData(msg);
    });

    socket.on("disconnect", () => {
      console.log("离开");
    });

    socket.emit("os-info");

    timer.current = setInterval(() => {
      socket.emit("os-info");
    }, 5000);

    return () => {
      timer.current = null;
    };
  }, []);

  return [data, setData];
};

export default useSocket;
