import { Link } from "react-router-dom";

const GameverseLogo = () => {
  return (
    <Link to="/">
      <div className="flex cursor-pointer items-center transition-all hover:scale-105">
        <img
          className="w-16 h-16 min-w-16"
          src="/gameverse-logo-no-text.png"
          alt="gameverse logo"
        />
        <h1 className="hidden text-lg font-bold tracking-widest text-white md:block">
          GAMEVERSE
        </h1>
      </div>
    </Link>
  );
};

export default GameverseLogo;
