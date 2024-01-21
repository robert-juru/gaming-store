import GameverseLogo from "./GameverseLogo";
import Header from "./Header";
import {
  HomePageMainSlider,
  HomePageTopSellersSlider,
  HomePageNewReleasesSlider,
  HomePageMostPlayedSlider,
} from "./ImageSlider";

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
      <section className="pt-16 sm:px-4 md:px-16 lg:px-32">
        <HomePageTopSellersSlider />
      </section>
      <section className="pt-16 sm:px-4 md:px-16 lg:px-32">
        <HomePageNewReleasesSlider />
      </section>
      <section className="pt-16 sm:px-4 md:px-16 lg:px-32">
        <HomePageMostPlayedSlider />
      </section>
    </div>
  );
};

export default HomePage;
