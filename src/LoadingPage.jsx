import Header from "./Header";

const LoadingPage = ({ cartGames, removeFromCart, fetchedGames }) => {
  return (
    <div className="m-0 p-4">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />{" "}
      <div className="flex h-[calc(100vh-96px)] items-center justify-center">
        <img
          className="flex h-[480x] w-[640px] "
          src="/loading-animation-unscreen.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingPage;
