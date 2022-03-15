import { Server } from "socket.io";
// import utils from "node-os-utils";

import OSInfo from "./os";
// import processInfo from "./process";

const createSocketIO = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("os-info", () => {
      socket.send({
        os: OSInfo,
      });
    });
  });
};

export default createSocketIO;
