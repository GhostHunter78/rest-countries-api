import { useNavigate } from "react-router-dom";
import SearchFields from "./Components/SearchFields";
import data from "./data.json";
import { useState } from "react";

const Content = ({ activeTheme }) => {
  const navigate = useNavigate();

  const handleNavigation = (countryName) => {
    navigate(`/selectedCountry/${countryName}`);
  };

  const [filteredCountries, setFilteredCountries] = useState(data);

  const handleSearch = (searchTerm) => {
    // Filter the countries based on the search term
    const filtered = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  // filter only africa region countries
  const handleAfricaFilter = () => {
    const africaFilter = data.filter(
      (country) => country.region.toLowerCase() === "africa"
    );
    setFilteredCountries(africaFilter);
  };

  // filter only asia region countries
  const handleAsiaFilter = () => {
    const asiaFilter = data.filter(
      (country) => country.region.toLowerCase() === "asia"
    );
    setFilteredCountries(asiaFilter);
  };

  // filter only america region countries
  const handleAmericasFilter = () => {
    const americasFilter = data.filter(
      (country) => country.region.toLowerCase() === "americas"
    );
    setFilteredCountries(americasFilter);
  };

  // filter only oceania region countries
  const handleOceaniaFilter = () => {
    const oceaniaFilter = data.filter(
      (country) => country.region.toLowerCase() === "oceania"
    );
    setFilteredCountries(oceaniaFilter);
  };

  // filter only europe region countries
  const handleEuropeFilter = () => {
    const europeFilter = data.filter(
      (country) => country.region.toLowerCase() === "europe"
    );
    setFilteredCountries(europeFilter);
  };

  // filter only all region countries together
  const handleAllFilter = () => {
    const allFilter = data.filter(
      (country) =>
        country.region.toLowerCase() === "africa" ||
        "asia" ||
        "americas" ||
        "europe" ||
        "polar" ||
        "oceania"
    );
    setFilteredCountries(allFilter);
  };

  return (
    <>
      <SearchFields
        activeTheme={activeTheme}
        onSearch={handleSearch}
        filters={{
          all: handleAllFilter,
          africa: handleAfricaFilter,
          asia: handleAsiaFilter,
          americas: handleAmericasFilter,
          oceania: handleOceaniaFilter,
          europe: handleEuropeFilter,
        }}
      />
      <div className="flex flex-col items-center mt-8 gap-[40px] pb-[65px] lg:flex-row lg:flex-wrap lg:px-[60px] lg:mt-[48px]">
        {filteredCountries.map((country, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(country.name)}
            className="bg-white rounded pb-[46px] cursor-pointer h-[430px] w-[324px] "
            style={{
              boxShadow: "0 0 7px 2px rgba(0, 0, 0, 0.03)",
              background: activeTheme === "light" ? "white" : "#2b3844",
            }}
          >
            <img
              className="w-full rounded-t h-[200px]"
              src={country.flags.png}
            />
            <p
              className="font-bold text-[20px] pl-6 pt-6"
              style={{
                color: activeTheme === "light" ? "#111517" : "white",
                maxWidth: "320px",
              }}
            >
              {country.name}
            </p>
            <p
              className="text-[16px] pl-6 mt-4 font-normal "
              style={{ color: activeTheme === "light" ? "#111517" : "white" }}
            >
              Population:
              <span
                className="text-[16px] font-light"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
              >
                {" " + country.population}
              </span>
            </p>
            <p
              className="text-[16px] pl-6 mt-4 font-normal "
              style={{ color: activeTheme === "light" ? "#111517" : "white" }}
            >
              Region:
              <span
                className="text-[16px] font-light"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
              >
                {" " + country.region}
              </span>
            </p>
            <p
              className="text-[16px] pl-6 mt-4 font-normal "
              style={{ color: activeTheme === "light" ? "#111517" : "white" }}
            >
              Capital:
              <span
                className="text-[16px] font-light"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
              >
                {" " + country.capital}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
