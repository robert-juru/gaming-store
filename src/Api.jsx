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
  // Record the start time for each fetch
  const startDetails = new Date();
  const detailsResponse = await axios.get(`${url}games/${gameId}?key=${key}`);
  const endDetails = new Date();

  const startMovies = new Date();
  const moviesResponse = await axios.get(`${url}games/${gameId}/movies?key=${key}`);
  const endMovies = new Date();

  const startScreenshots = new Date();
  const screenshotsResponse = await axios.get(`${url}games/${gameId}/screenshots?key=${key}`);
  const endScreenshots = new Date();

  // Calculate the time taken for each fetch
  const detailsTime = endDetails - startDetails;
  const moviesTime = endMovies - startMovies;
  const screenshotsTime = endScreenshots - startScreenshots;

  console.log(`Details fetch time: ${detailsTime} milliseconds`);
  console.log(`Movies fetch time: ${moviesTime} milliseconds`);
  console.log(`Screenshots fetch time: ${screenshotsTime} milliseconds`);

  return {
    details: detailsResponse.data,
    movies: moviesResponse.data,
    screenshots: screenshotsResponse.data,
  };
};

