import Header from "../../components/Header";
import {
  HomePageMainSlider,
  HomePageTopSellersSlider,
  HomePageNewReleasesSlider,
  HomePageTopRatedByGamersSlider,
  HomePageRecentlyUpdatedSlider,
  HomePageTopRatedByCriticsSlider,
} from "./ImageSlider";
import HomePageTopUpcomingSection from "./HomePageTopUpcomingSection";

const HomePage = ({
  fetchedGames,
  cartGames,
  removeFromCart,
  handleCart,
  isInCart,
  homePageData,
  displayedGames,
  setDisplayedGames
}) => {
  return (
    <div className="m-0 ">
      <header className="md:px-16 p-4 pb-0">
        <Header
          fetchedGames={fetchedGames}
          cartGames={cartGames}
          removeFromCart={removeFromCart}
          displayedGames={displayedGames}
          setDisplayedGames={setDisplayedGames}
        />
      <hr className="border-slate-800  pb-4  font-bold" />
      </header>
      <section className="" >
        <HomePageMainSlider
          mainGames={homePageData.mostPopular.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 sm:pt-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopSellersSlider
          topSellers={homePageData.topSellers.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-4 sm:pt-8 md:pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageNewReleasesSlider
          newReleases={homePageData.newReleases.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
        <HomePageTopRatedByGamersSlider
          topRatedByGamers={homePageData.topRatedByGamers.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      <HomePageTopUpcomingSection
        topUpcoming={homePageData.topUpcoming.results}
        handleCart={handleCart}
        isInCart={isInCart}
      />
      <section className="md:px-18 px-8 pt-4 sm:pt-8 md:pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageRecentlyUpdatedSlider
          recentlyUpdated={homePageData.recentlyUpdated.results}
          handleCart={handleCart}
          isInCart={isInCart}
        />
      </section>
      <section className="md:px-18 px-8 pt-4 sm:pt-8 md:pt-16 sm:px-12 lg:px-24 xl:px-48">
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
