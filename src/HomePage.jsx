import GameverseLogo from "./GameverseLogo";
import Header from "./Header";
import {
  HomePageMainSlider,
  HomePageTopSellersSlider,
  HomePageNewReleasesSlider,
  HomePageTopRatedByGamersSlider,
  HomePageRecentlyUpdatedSlider,
  HomePageTopRatedByCriticsSlider,
} from "./ImageSlider";
import HomePageTopUpcomingSection from "./HomePageTopUpcomingSection";
import LoadingPage from "./LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { fetchHomePageData } from "./Api";

const HomePage = ({
  fetchedGames,
  cartGames,
  removeFromCart,
  handleCart,
  isInCart,
}) => {
  const homePageQuery = useQuery({
    queryKey: ["homePage"],
    queryFn: () => fetchHomePageData(),
  });
  if (homePageQuery.isLoading)
    return (
      <LoadingPage
        removeFromCart={removeFromCart}
        cartGames={cartGames}
        fetchedGames={fetchedGames}
      />
    );
  if (homePageQuery.isError)
    return <h1 className="text-4xl text-white">Error loading data!!!</h1>;

  console.log(homePageQuery.data);
  let homePageData = homePageQuery.data;

  return (
    <div className="m-0">
      <header className="p-4">
        <Header
          fetchedGames={fetchedGames}
          cartGames={cartGames}
          removeFromCart={removeFromCart}
        />
      </header>
      <section className="">
        <HomePageMainSlider
          mainGames={homePageData.mostPopular.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopSellersSlider
          topSellers={homePageData.topSellers.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageNewReleasesSlider
          newReleases={homePageData.newReleases.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopRatedByGamersSlider topRatedByGamers={homePageData.topRatedByGamers.results} handleCart={handleCart} isInCart={isInCart}/>
      </section>
      <HomePageTopUpcomingSection
        topUpcoming={homePageData.topUpcoming.results}
        handleCart={handleCart}
        isInCart={isInCart}
      />
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageRecentlyUpdatedSlider
          recentlyUpdated={homePageData.recentlyUpdated.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopRatedByCriticsSlider
          topRatedByCritics={homePageData.topRatedByCritics.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
    </div>
  );
};

export default HomePage;
