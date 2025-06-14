import http from '../http'

// 登录
export const login = (param: any) => http.post<any[]>('/role/login', param)
