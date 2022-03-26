import process from "process";

const processInfo = [
  {
    name: "进程的 PID",
    name_en: "pid",
    content: process.pid,
  },
  {
    name: "当前进程的父进程的 PID",
    name_en: "ppid",
    content: process.ppid,
  },
  {
    name: "描述 Node.js 进程的内存使用量（以字节为单位）的对象",
    name_en: "memoryUsage",
    content: process.memoryUsage(),
  },
  {
    name: "方法在具有属性 user 和 system 的对象中返回当前进程的用户和系统 CPU 时间使用情况，其值为微秒值（百万分之一秒)",
    name_en: "cpuUsage",
    content: process.cpuUsage(),
  },
  {
    name: "为其编译 Node.js 二进制文件的操作系统 CPU 架构",
    name_en: 'arch',
    content: process.arch,
  },
  {
    name: "process.argv 属性返回数组，其中包含启动 Node.js 进程时传入的命令行参数。 ",
    name_en: "argv",
    content: process.argv
  },
  {
    name: "process.argv0 属性存储了 Node.js 启动时传入的 argv[0] 原始值的只读副本。",
    name_en: "argv",
    content: process.argv0
  },
  {
    name: "如果 Node.js 进程是使用 IPC 通道衍生（参见子进程文档），则 process.channel 属性是对 IPC 通道的引用。 如果不存在 IPC 通道，则此属性为 undefined。",
    name_en: "channel",
    content: process.channel,
  },
  {
    name: "process.cwd() 方法返回 Node.js 进程的当前工作目录。",
    name_en: "cwd",
    content: process.cwd(),
  },
  {
    name: "debugPort",
    name_en: "debugPort",
    content: process.debugPort
  },
  {
    name: "env",
    name_en: "env",
    content: process.env,
  },
  {
    name: 'execArgv',
    name_en: "execArgv",
    content: process.execArgv
  },
  {
    name: 'execPath',
    name_en: 'execPath',
    content: process.execPath
  }
];

export default processInfo;
