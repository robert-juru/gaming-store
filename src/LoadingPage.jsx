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
      <div className="flex h-[calc(100vh-96px)] items-center justify-center">
        <img
          className="flex h-[480px] w-[640px] "
          src="/loading-animation-unscreen.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingPage;
