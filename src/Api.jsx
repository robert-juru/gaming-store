import axios from "axios";
const key = `d5bef9762ffc48b79c8cc04fd7723bdb`;
const url = `https://api.rawg.io/api/`;

export const fetchData = async (endpoint) => {
  // fetching 40 games
  const response = await axios.get(
    `${url}${endpoint}?key=${key}&page_size=40&page=1`,
  );
  return response.data.results;
};
