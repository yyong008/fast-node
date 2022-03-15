import process from "process";

const processInfo = [
  {
    name: "",
    name_en: "pid",
    content: process.pid,
  },
  {
    name: "",
    name_en: "ppid",
    content: process.ppid,
  },
  {
    name: "",
    name_en: "memoryUsage",
    content: process.memoryUsage(),
  },
  {
    name: "",
    name_en: "memoryUsage",
    content: process.cpuUsage(),
  },
];

export default processInfo;
