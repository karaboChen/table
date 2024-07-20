import axios from "axios";
const instance = axios.create({
  //本地
  baseURL: "http://localhost:5107",
  withCredentials:true,
  timeout: 50000,
});


export const Get_test = (e) => instance.post("api/DB/search",e);
