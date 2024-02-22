import { useState } from "react";
import ArrowDownLight from "../SVGs/ArrowDownLight";
import ArrowDownDark from "../SVGs/ArrowDownDark";
import SearchLight from "../SVGs/SearchLight";
import SearchDark from "../SVGs/SearchDark";
import data from "../data.json";

const SearchFields = ({ activeTheme, onSearch, filters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region");
  const [searchTerm, setSearchTerm] = useState("");

  const filterChoose = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle input change and filter countries based on search term
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Call the onSearch function passed from the parent component
  };

  return (
    <>
      <div className="flex flex-col items-left px-4 lg:px-[60px] lg:flex-row lg:items-center lg:justify-between lg:mt-[30px]">
        <div className="w-full grid relative mt-6 cursor-pointer">
          <input
            id="searchInput"
            className="py-4 pl-[74px] pr-8 border-none rounded ml-26 text-xs font-normal font-sans font-weight-400 leading-20 outline-none lg:w-[480px] lg:text-[16px] lg:mt-0"
            type="text"
            placeholder="Search for a country…"
            style={{
              boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.05)",
              background: activeTheme === "light" ? "white" : "#2b3844",
              color: activeTheme === "light" ? "#111517" : "white",
            }}
            value={searchTerm}
            onChange={handleSearch}
          />
          <label className="absolute grid place-items-center top-[-2px] bottom-0">
            <button className="bg-transparent border-0 p-5 outline-none">
              {activeTheme === "light" ? <SearchLight /> : <SearchDark />}
            </button>
          </label>
        </div>
        <div
          className=" relative w-[200px] py-[14px] pr-5 pl-6 flex items-center justify-between mt-10 rounded cursor-pointer lg:w-[225px] lg:mt-5"
          style={{
            boxShadow: " 0 2px 9px 0 rgba(0, 0, 0, 0.05)",
            background: activeTheme === "light" ? "white" : "#2b3844",
          }}
          onClick={toggleDropdown}
        >
          <p
            className="text-[14px] font-normal lg:text-[16px]"
            style={{ color: activeTheme === "light" ? "#111517" : "white" }}
          >
            {selectedFilter}
          </p>
          {activeTheme === "light" ? <ArrowDownLight /> : <ArrowDownDark />}
        </div>
        {isOpen && (
          <div
            className="absolute py-4 px-6 flex flex-col items-start rounded w-[200px] mt-1 bg-white top-[4%] lg:top-[25%] lg:left-[84%]"
            style={{
              boxShadow: " 0 2px 9px 0 rgba(0, 0, 0, 0.05)",
              background: activeTheme === "light" ? "white" : "#2b3844",
            }}
          >
            <ul>
              <li
                className="text-[14px] text-blackWords font-normal cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("Filter By regions (all)");
                  filters.all();
                }}
              >
                Filter by Regions (all)
              </li>
              <li
                className="text-[14px] text-blackWords font-normal mt-2 cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("Africa");
                  filters.africa();
                }}
              >
                Africa
              </li>
              <li
                className="text-[14px] text-blackWords font-normal mt-2 cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("America");
                  filters.americas();
                }}
              >
                America
              </li>
              <li
                className="text-[14px] text-blackWords font-normal mt-2 cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("Asia");
                  filters.asia();
                }}
              >
                Asia
              </li>
              <li
                className="text-[14px] text-blackWords font-normal mt-2 cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("Europe");
                  filters.europe();
                }}
              >
                Europe
              </li>
              <li
                className="text-[14px] text-blackWords font-normal mt-2 cursor-pointer lg:text-[16px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
                onClick={() => {
                  filterChoose("Oceania");
                  filters.oceania();
                }}
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
