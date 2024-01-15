import axios from "axios";

const key = `d5bef9762ffc48b79c8cc04fd7723bdb`;
const url = `https://api.rawg.io/api/`;

export const fetchStoreData = async (endpoint, page = 1, pageSize = 40) => {
  const response = await axios.get(
    `${url}${endpoint}?key=${key}&page_size=${pageSize}&page=${page}`,
  );
  return response.data.results;
};

export const fetchGamePageData = async (gameId) => {
  const [detailsResponse, moviesResponse] = await Promise.all([
    axios.get(`${url}games/${gameId}?key=${key}`),
    axios.get(`${url}games/${gameId}/movies?key=${key}`),
  ]);
  return {
    details: detailsResponse.data,
    movies: moviesResponse.data,
  };
};
