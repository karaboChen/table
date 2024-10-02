import axios from "axios";
const instance = axios.create({
  //本地
  baseURL: "http://localhost:5107",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 50000,
});


export const Get_file = (e) => instance.post('api/UpFile/Cookie3',e);