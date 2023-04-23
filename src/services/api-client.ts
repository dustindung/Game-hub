import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "48c93257f2614484a3a193876d5d504f",
  },
});
