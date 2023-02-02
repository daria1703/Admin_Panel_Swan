import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDUwYzY3ODY0ZDNiN2QxNjA4NDdlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTM0NzgyNSwiZXhwIjoxNjc1NjA3MDI1fQ.WLmVU-7m2yyXWrPBfKhMYwgJ4F53_4nJy_IT6AP2dI8"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});