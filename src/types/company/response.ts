
// 后端统一返回数据模型
export type TResponseData<T> = {
  code: 0 | string // 0 => ok  
  msg: string
  data: T
}
// 后端分页数据模型
export type PageData<T = any> = {
  total: 0 | number
  list: Array<T>
}

export interface PowerMenuList {
  id: number;
  tatil: string;
  skipUrl: string;
  status: number;
  createTime: string;
  updateTime: string;
}

export interface LoginData {
  label: string;
  token: string;
  powerMenuList: PowerMenuList[];
  [key: string]: any;
}

export interface BaseDataRes {
  name: string;
  label: string;
  loginIp: string;
  loginTime: string;
  workerNum: number;
  departmentNum: number,
  channelNum: number,
}

export interface DepListDataRes {
  id: number;
  type: number;
  name: string;
  roleId: string;
  status: number;
  remark?: any;
  createTime: string;
  updateTime: string;
}

export interface WorkerAchievementVO {
  roleId: string;
  type: number;
  channelNum: number;
  channelUserNum: number;
  channelConsume?: any;
  totalUserNum?: any;
  priUserNum?: any;
  chnUserNum?: any;
  totalConsume?: any;
  priConsume?: any;
  chnConsume?: any;
}

export interface WorkerListRes {
  roleId: string;
  nike: string;
  name: string;
  phone: string;
  email: string;
  check: string;
  createTime: string;
}

export interface WorkerDetailRes {
  departmentName: string;
  departmentCadre: string;
  name: string;
  email: string;
  phone: string;
  workerAchievementVO: WorkerAchievementVO;
}
export interface ChannelListRes {
  id: number;
  roleId: string;
  companyName: string;
  address: string;
  bankName: string;
  bankAccount: string;
  identifier: string;
  status: number;
  remark?: any;
  createTime: string;
  updateTime: string;
  name: string;
  phone: string;
  userNum: number;
  consume: number;
}
export interface ChannelPromotersListRes {
  id: number;
  type: number;
  nike: string;
  name: string;
  email: string;
  phone: string;
  roleId: string;
  status: number;
  workerNum: number;
  checkNum: number;
  remark?: any;
  createTime: string;
}
export interface ExtractListRes {
  id: number;
  channelId: number;
  type: number;
  companyName: string;
  bankName: string;
  bankAccount: string;
  identifier: string;
  amount: number;
  taxAmount: number;
  taxRatio: number;
  invoiceUrl: string;
  status: number;
  remark?: any;
  createTime: string;
  updateTime: string;
  name: string;
}
export interface RewardListRes {
  id: number;
  roleId: string;
  departmentName: string;
  name: string;
  assTag: string;
  totalReward: number;
  createTime: string;
}
export interface RewardDetailRes {
  id: number;
  roleId: string;
  departmentId: number;
  type: number;
  departmentName: string;
  name: string;
  phone: string;
  email: string;
  popUser: number;
  popUserConsume: number;
  popChannel: number;
  popChannelUser: number;
  assUser: number;
  assUserConsume: number;
  assChannel: number;
  assChannelUser: number;
  baseSdConsume: number;
  baseGrConsume: number;
  baseQdConsume: number;
  baseChannel: number;
  baseChannelUser: number;
  rewardSdConsume: number;
  rewardGrConsume: number;
  rewardQdConsume: number;
  sdConsume: number;
  grConsume: number;
  qdConsume: number;
  rewardChannel: number;
  rewardChannelUser: number;
  assTag: string;
  totalReward: number;
  status: number;
  remark?: any;
  createTime: string;
  updateTime: string;
}