import Header from "./Header";
import { Link } from "react-router-dom";
const ErrorPage = ({ cartGames, removeFromCart, fetchedGames }) => {
  return (
    <div className="p-4 pb-0 md:px-8 xl:px-12">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />{" "}
      <hr className="border-slate-800  pb-4  font-bold" />
      <div className="mt-0 flex h-full flex-col items-center justify-center px-4 lg:mt-12 lg:flex-row lg:gap-8 xl:mt-24 xl:gap-16 xl:px-12">
        <img
          className="order-2 hidden lg:order-1  lg:flex  xl:h-[432px] xl:w-[577px]"
          src="/error_img.png"
          alt="404 error image"
        />
        <div className="order-1 flex flex-col items-center gap-4 text-center text-white lg:order-2 lg:items-start lg:text-start ">
          <h1 className="pb-12  text-5xl font-extrabold sm:py-12 sm:text-6xl lg:py-0  lg:text-7xl ">
            Oops!
          </h1>
          <img
            className="flex h-[240px] w-[360px] sm:h-[360px] sm:w-[480px] lg:hidden"
            src="/error_img.png"
            alt="404 error image"
          />
          <h2 className=" text-2xl font-bold text-gray-100 lg:text-4xl">
            This page seems to be lost in the digital realm.
          </h2>
          <p className="block text-lg text-gray-300 sm:text-2xl">
            Sorry, the page you're looking for can't be found. Feel free to go
            back to the home page and explore other great offers!
          </p>
          <Link
            to="/"
            className="w-full text-white md:text-xl"
          >
            <button className="w-full rounded-md bg-blue-600 p-4 text-center  hover:bg-blue-500">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
