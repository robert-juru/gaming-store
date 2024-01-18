import axios from "axios";

const key = `404c51bcb45d448e87440b1483ccd155`;
const url = `https://api.rawg.io/api/`;

export const fetchStoreData = async (endpoint, page = 1, pageSize = 40) => {
  const response = await axios.get(
    `${url}${endpoint}?key=${key}&page_size=${pageSize}&page=${page}`,
  );
  return response.data.results;
};

export const fetchGamePageData = async (gameId) => {
  const [detailsResponse, moviesResponse, screenshotsResponse] =
    await Promise.all([
      axios.get(`${url}games/${gameId}?key=${key}`),
      axios.get(`${url}games/${gameId}/movies?key=${key}`),
      axios.get(`${url}games/${gameId}/screenshots?key=${key}`),
    ]);

  return {
    details: detailsResponse.data,
    movies: moviesResponse.data,
    screenshots: screenshotsResponse.data,
  };
};
