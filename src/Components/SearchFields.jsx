import { useState } from "react";
import ArrowDownLight from "../SVGs/ArrowDownLight";
import SearchLight from "../SVGs/SearchLight";

const SearchFields = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region");

  const filterChoose = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col items-left px-4">
        <div className="w-full grid relative mt-6 cursor-pointer">
          <input
            id="searchInput"
            className="py-4 pl-[74px] pr-8 border-none rounded ml-26 text-xs font-normal font-sans font-weight-400 leading-20 outline-none"
            type="text"
            placeholder="Search for a country…"
            style={{ boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.05)" }}
          />
          <label className="absolute grid place-items-center top-[-2px] bottom-0">
            <button className="bg-transparent border-0 p-5 outline-none">
              <SearchLight />
            </button>
          </label>
        </div>
        <div
          className=" relative bg-white w-[200px] py-[14px] pr-5 pl-6 flex items-center justify-between mt-10 rounded cursor-pointer"
          style={{ boxShadow: " 0 2px 9px 0 rgba(0, 0, 0, 0.05)" }}
          onClick={toggleDropdown}
        >
          <p className="text-[14px] text-blackWords font-semibold">
            {selectedFilter}
          </p>
          <ArrowDownLight />
        </div>
        {isOpen && (
          <div
            className="absolute py-4 px-6 flex flex-col items-start rounded w-[200px] mt-1 bg-white top-[41%]"
            style={{ boxShadow: " 0 2px 9px 0 rgba(0, 0, 0, 0.05)" }}
          >
            <ul>
              <li
                className="text-[14px] text-blackWords font-semibold cursor-pointer"
                onClick={() => filterChoose("Filter by Regions (All)")}
              >
                Filter by Regions (All)
              </li>
              <li
                className="text-[14px] text-blackWords font-semibold mt-2 cursor-pointer"
                onClick={() => filterChoose("Africa")}
              >
                Africa
              </li>
              <li
                className="text-[14px] text-blackWords font-semibold mt-2 cursor-pointer"
                onClick={() => filterChoose("America")}
              >
                America
              </li>
              <li
                className="text-[14px] text-blackWords font-semibold mt-2 cursor-pointer"
                onClick={() => filterChoose("Asia")}
              >
                Asia
              </li>
              <li
                className="text-[14px] text-blackWords font-semibold mt-2 cursor-pointer"
                onClick={() => filterChoose("Europe")}
              >
                Europa
              </li>
              <li
                className="text-[14px] text-blackWords font-semibold mt-2 cursor-pointer"
                onClick={() => filterChoose("Oceania")}
              >
                Oceania
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchFields;
