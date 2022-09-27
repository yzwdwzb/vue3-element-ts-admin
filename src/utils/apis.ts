import { request } from "./http";

// 调用测试
export function login() {
  return request({
    url: "admin/user/login", //此处为自己请求地址
    method: "get",
  });
}
