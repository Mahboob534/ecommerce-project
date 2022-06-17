import axios from "axios";


import {  BASE_URL } from "../config/variable.config";


const instanceAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "content-type": "application/json" },
});

export default instanceAxios;