const config = {
  socketURL: "http://localhost:9000",
  socketOptions: {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd",
    },
  },
  cors: {
    origin: "http://localhost:3000",
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
};

export default config;
