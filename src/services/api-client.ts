import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb78a5ee65ab45a9865ec307b3497883",
  },
});
