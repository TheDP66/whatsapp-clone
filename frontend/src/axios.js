import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-backend66.herokuapp.com/",
});

export default instance;
