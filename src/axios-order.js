import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-shop-6a32b-default-rtdb.firebaseio.com/",
});

export default instance;
