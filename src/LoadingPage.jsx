import Header from "./Header";

const LoadingPage = ({ cartGames, removeFromCart, fetchedGames }) => {
  return (
    <div className="md:px-16 p-4 pb-0">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />{" "}
      <hr className="border-slate-800  pb-4  font-bold" />
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <img
          className="flex h-[480px] w-[360px] md:h-[480px] md:w-[640px] "
          src="/loading-animation-unscreen.gif"
          alt="loading animation"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
