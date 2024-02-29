import axios from "axios";
import { format, sub, add } from "date-fns";

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

export const fetchHomePageData = async () => {
  const today = new Date();
  const sixMonthsAgo = sub(today, { months: 6 });
  const sixMonthsFromNow = add(today, { months: 6 });
  const todayFormatted = format(today, "yyyy-MM-dd");
  const sixMonthsAgoFormatted = format(sixMonthsAgo, "yyyy-MM-dd");
  const sixMonthsFromNowFormatted = format(sixMonthsFromNow, "yyyy-MM-dd");

  const [
    mostPopularGames,
    topSellersGames,
    newReleasesGames,
    topUpcomingGames,
    recentlyUpdatedGames,
    topRatedCriticsGames,
    topRatedGamersGames,
  ] = await Promise.all([
    axios.get(`${url}games?key=${key}&ordering=-added`),
    axios.get(
      `${url}games?key=${key}&ordering=-added&dates=2023-01-01,${todayFormatted}&exclude_additions`,
    ),
    axios.get(
      `${url}games?key=${key}&ordering=-added&dates=${sixMonthsAgoFormatted},${todayFormatted}&exclude_additions`,
    ),
    axios.get(
      `${url}games?key=${key}&ordering=-added&dates=${todayFormatted},${sixMonthsFromNowFormatted}&exclude_additions`,
    ),
    axios.get(`${url}games?key=${key}&ordering=-updated&exclude_additions`),
    axios.get(
      `${url}games?key=${key}&ordering=-metacritic&dates=2014-01-01,${sixMonthsFromNowFormatted}&exclude_additions`,
    ),
    axios.get(
      `${url}games?key=${key}&ordering=-rating&dates=2014-01-01,${sixMonthsFromNowFormatted}&page_size=40&page=1&exclude_collection=882`,
    ),
  ]);
  return {
    mostPopular: mostPopularGames.data,
    topSellers: topSellersGames.data,
    newReleases: newReleasesGames.data,
    topUpcoming: topUpcomingGames.data,
    recentlyUpdated: recentlyUpdatedGames.data,
    topRatedByCritics: topRatedCriticsGames.data,
    topRatedByGamers: topRatedGamersGames.data,
  };
};

export const fetchSearchData = async (search) => {
  const response = await axios.get(
    `${url}games?key=${key}&search=${search || ""}&search_exact=true&ordering=-added&page_size=40`,
  );
  return response.data.results;
};
