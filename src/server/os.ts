import * as os from 'os'

type TOSInfo = {
  name: string,
  name_en: string,
  content: any,
}

const OSInfo: TOSInfo[] = [
  // {
  //   name: "终止符",
  //   name_en: "EOL",
  //   content: os.EOL,
  // },
  {
    name: ' CPU 架构',
    name_en: 'arch',
    content: os.arch(), // 'arm', 'arm64', 'ia32', 'mips','mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
  },
  // {
  //   name: "常量",
  //   name_en: "EOL",
  //   content: os.constants,
  // },
  {
    name: 'CPU',
    name_en: 'cpus',
    content: os.cpus(), // 注意数据结构, 其实有 model 就满足
  },
  {
    name: '网络接口对象',
    name_en: 'networkInterfaces',
    content: os.networkInterfaces(), // 对象
  },
  // {
  //   name: "平台文件路径",
  //   name_en: "devNull",
  //   content: os.devNull,
  // },
  {
    name: '剩余内存',
    name_en: 'freemem',
    content: `${Math.floor(os.freemem() / 1000 / 1000)} M`,
  },
  {
    name: '主用户目录',
    name_en: 'homedir',
    content: os.homedir(),
  },
  {
    name: '系统主机名',
    name_en: 'hostname',
    content: os.hostname(),
  },
  {
    name: '操作系统平台',
    name_en: 'platform',
    content: os.platform(),
  },
  {
    name: '系统临时文件夹',
    name_en: 'tmpdir',
    content: os.tmpdir(),
  },
  {
    name: '系统总内存',
    name_en: 'totalmem',
    content: `${Math.floor(os.totalmem() / 1000 / 1000)} M`,
  },
  {
    name: '操作系统名称',
    name_en: 'type',
    content: os.type(),
  },
]

export default OSInfo
