export interface LoginObj {
    account: string,
    loginPws: string,
}

export interface PhoneCode {
    code: string;
    phone: string;
}

export interface RegisterData {
    code: string;
    logPwd: string;
    market: string;
    phone: string;
}
export interface HomeLineData {
    tal: number;
}
export interface AddDepData {
    departmentName?: string;
    email: string;
    logPwd: string;
    name: string;
    phone: string;
    type: number | undefined;
    id?: number;
    confirmpassword?: string,
    nike?: string;
}
export interface DepList {
    nike?: string;
    type?: number;
    pageSize: number;
    pageNum: number;
}

export interface WorkerList {
    check?: string;
    name?: string;
    pageSize: number;
    pageNum: number;
}

export interface ChannelList {
    name?: string;
    companyName?: string;
    pageSize: number;
    pageNum: number;
}
export interface ChannelPromotersList {
    name?: string;
    upsName?: string;
    phone?: string;
    channelId: number;
    pageNum: number;
    pageSize: number;
}

export interface ExtractList {
    companyName?: string;
    pageNum: number;
    pageSize: number;
    status?: number;
}

export interface ExamineExtract {
    id: number;
    remark?: string;
    status: number;
}

export interface RewardList {
    departmentId?: number;
    name?: string;
    pageNum: number;
    pageSize: number;
}

export interface RewardHistoryList {
    roleId: string;
    startTime?: string;
    endTime?: string;
    pageNum: number;
    pageSize: number;
}