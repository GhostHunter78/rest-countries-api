import { useNavigate } from "react-router-dom";
import SearchFields from "./Components/SearchFields";
import data from "./data.json";

const Content = ({ activeTheme }) => {
  const navigate = useNavigate();

  const handleNavigation = (countryName) => {
    navigate(`/selectedCountry/${countryName}`);
  };

  return (
    <>
      <SearchFields activeTheme={activeTheme} />
      <div className="flex flex-col items-center mt-8 gap-[40px] pb-[65px]">
        {data.map((country, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(country.name)}
            className="bg-white rounded pb-[46px]"
            style={{
              boxShadow: "0 0 7px 2px rgba(0, 0, 0, 0.03)",
              background: activeTheme === "light" ? "white" : "#2b3844",
            }}
          >
            <img className="w-full rounded-t" src={country.flags.png} />
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
