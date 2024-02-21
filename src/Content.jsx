import { useNavigate } from "react-router-dom";
import SearchFields from "./Components/SearchFields";
import data from "./data.json";

const Content = () => {
  const navigate = useNavigate();

  const handleNavigation = (countryName) => {
    navigate(`/selectedCountry/${countryName}`);
  };

  return (
    <>
      <SearchFields />
      <div className="flex flex-col items-center mt-8 gap-[40px]">
        {data.map((country, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(country.name)}
            className="bg-white rounded pb-[46px]"
            style={{ boxShadow: "0 0 7px 2px rgba(0, 0, 0, 0.03)" }}
          >
            <img className="w-full rounded-t" src={country.flags.png} />
            <p className="font-bold text-[20px] text-blackWords pl-6 pt-6">
              {country.name}
            </p>
            <p className="text-[16px] text-blackWords pl-6 mt-4 font-semibold ">
              Population:
              <span className="text-[16px] text-blackWords font-normal">
                {" " + country.population}
              </span>
            </p>
            <p className="text-[16px] text-blackWords pl-6 mt-4 font-semibold ">
              Region:
              <span className="text-[16px] text-blackWords font-normal">
                {" " + country.region}
              </span>
            </p>
            <p className="text-[16px] text-blackWords pl-6 mt-4 font-semibold ">
              Capital:
              <span className="text-[16px] text-blackWords font-normal">
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
