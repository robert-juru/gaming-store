const GameSortingSection = () => {
  return (
    <section className="flex-column col-span-full flex items-center  justify-between  rounded-md bg-gray-900 p-4 text-slate-200">
      <div className="flex flex-row gap-4">
        <ul className="flex items-center justify-center gap-2">
          <h3 className="self-center pb-4 text-xs font-bold tracking-wide">
            SYSTEM
          </h3>
          <li className="pb-1">Any</li>
          <li className="pb-1">Windows</li>
          <li className="pb-1">Apple</li>
          <li className="border-r border-r-slate-600 pb-1 pr-4">Android</li>
        </ul>
        <ul className="flex flex-row  justify-center gap-2">
          <h3 className="pb-4 text-xs font-bold tracking-wide">LAUNCHER</h3>
          <li className="pb-1">Steam</li>
          <li className="pb-1">Origin</li>
          <li className="pb-1">Epic Games</li>
          <li className="pb-1">Rockstar</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <label className="self-start text-xs" htmlFor="sort-select">
          Sort by:
        </label>
        <select className="bg-gray-900 font-bold pb-1" name="sort" id="sort-select">
          <option className="font-normal text-slate-300" value="popularity">
            Popularity
          </option>
          <option className="font-normal text-slate-300" value="release-date">
            Release Date
          </option>
          <option className="font-normal text-slate-300" value="rating">
            Rating
          </option>
          <option className="font-normal text-slate-300" value="name-a-to-z">
            Name: A to Z
          </option>
          <option className="font-normal text-slate-300" value="name-z-to-a">
            Name: Z to A
          </option>
        </select>
      </div>
    </section>
  );
};
export default GameSortingSection;
