import axios from  'axios';

const axiosInstance =  axios.create({
  baseURL:`https://api.myjson.com/bins/j23xw`
})

export default axiosInstance ;