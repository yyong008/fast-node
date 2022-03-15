import express from "express";
import http from "http";
import createSocketIO from "./socket-io";

const app = express();
const server = http.createServer(app);

createSocketIO(server);

server.listen(9000, () => {
  console.log("listening on *:9000");
});
