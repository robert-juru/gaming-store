const GameFiltersSidebar = () => {
  return (
    <aside className="hidden md:block">
      <nav className="rounded-md bg-gray-900 p-4 text-slate-200">
        <ul>
          <h3 className="pb-4 text-xs font-bold tracking-wide">GENRE</h3>
          <li className="pb-1">Action</li>
          <li className="pb-1">Adventure</li>
          <li className="pb-1">RPG</li>
          <li className="pb-1">Shooter</li>
          <li className="pb-1">Sports</li>
          <li className="pb-4">Strategy</li>
          <hr className="mb-4 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 text-xs font-bold tracking-wide">YEAR</h3>
          <li className="pb-1">1990-2000</li>
          <li className="pb-1">2000-2010</li>
          <li className="pb-1">2010-2020</li>
          <li className="pb-4">2020-Now</li>
          <hr className="mb-4 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 text-xs font-bold tracking-wide">RATING</h3>
          <li className="pb-1">5 stars</li>
          <li className="pb-1">4 stars</li>
          <li className="pb-1">3 stars</li>
          <li className="pb-1">2 stars</li>
        </ul>
      </nav>
    </aside>
  );
};
export default GameFiltersSidebar;
