import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDUwYzY3ODY0ZDNiN2QxNjA4NDdlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTYzNjY1NCwiZXhwIjoxNjc1ODk1ODU0fQ.93VKnFvBWm3td4wlg0X-2xaZcH9eftulBgd7g5ffUGU"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});