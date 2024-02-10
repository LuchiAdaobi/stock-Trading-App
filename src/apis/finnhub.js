import axios from "axios";

const TOKEN = "cn301ipr01qt9t7vjsggcn301ipr01qt9t7vjsh0";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});