import GameverseLogo from "./GameverseLogo";
import Header from "./Header";
import {
  HomePageMainSlider,
  HomePageTopSellersSlider,
  HomePageNewReleasesSlider,
  HomePageMostPlayedSlider,
  HomePageRecentlyUpdatedSlider,
  HomePageTopRatedSlider,
} from "./ImageSlider";
import HomePageTopUpcomingSection from "./HomePageTopUpcomingSection";

const HomePage = ({ fetchedGames, cartGames, removeFromCart }) => {
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
        <HomePageMainSlider />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopSellersSlider />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageNewReleasesSlider />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageMostPlayedSlider />
      </section>
      <HomePageTopUpcomingSection />
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageRecentlyUpdatedSlider />
      </section>
      <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
        <HomePageTopRatedSlider />
      </section>
    </div>
  );
};

export default HomePage;
