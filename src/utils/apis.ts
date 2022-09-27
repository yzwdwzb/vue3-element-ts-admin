import { request } from "./http";

interface Verify {
  userName: string
  passWord: string
}


// 调用测试
export function login(data:Verify) {
  return request({
    url: "admin/user/login", //此处为自己请求地址
    method: "get",
    data
  });
}
