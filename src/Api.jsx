import axios from "axios";

const key = `d5bef9762ffc48b79c8cc04fd7723bdb`;
const url = `https://api.rawg.io/api/`;

export const fetchData = async (endpoint, page = 1, pageSize = 40) => {
  const response = await axios.get(
    `${url}${endpoint}?key=${key}&page_size=${pageSize}&page=${page}`
  );
  return response.data.results;
};
