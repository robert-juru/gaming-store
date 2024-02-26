import { FaFilter } from "react-icons/fa6";
import { IconContext } from "react-icons";

const MobileFiltersButton = ({openModal}) => {
  return (
    <>
      <button onClick={openModal}  className="border-1 bg-slate-950 flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-slate-700 text-center text-slate-300">
        <IconContext.Provider value={{ color: "rgb(203 213 225)" }}>
          <FaFilter />
        </IconContext.Provider>
        <span>Filter games</span>
      </button>
    </>
  );
};
export default MobileFiltersButton;
