import Header from "./Header";
import { Link } from "react-router-dom";

const ShoppingCartPage = ({ cartGames, setCartGames, fetchedGames }) => {
  return (
    <div className="m-0 p-4">
      <Header
        cartGames={cartGames}
        setCartGames={setCartGames}
        fetchedGames={fetchedGames}
      />
      <hr className="border-slate-800 pb-12"/>
      <div className="flex pt-4 pb-12 mx-16 flex-col items-center justify-center text-gray-300 border border-solid border-slate-800">
        <img className="p-8" src="green-empty-cart.png" alt="green sad empty cart"></img>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl pb-2">
            Cart's feeling a bit empty. Time to fill it with gaming joy!
          </h2>
          <Link className="text-lg hover:text-white hover:underline" to="/">
            Shop for Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
