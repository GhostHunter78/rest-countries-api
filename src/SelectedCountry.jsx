import { useNavigate, useParams } from "react-router-dom";
import ArrowLeftLight from "./SVGs/ArrowLeftLight";
import data from "./data.json";

const SelectedCountry = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const { name } = useParams();
  const country = data.find((country) => country.name === name);

  // Check if country is found
  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-start px-[28px] pt-[40px] pb-[60px]">
        <div
          className="flex items-center gap-2 px-6 py-[7px] rounded"
          style={{ boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.29)" }}
          onClick={handleNavigation}
        >
          <ArrowLeftLight />
          <p className="text-[16px] font-normal">Back</p>
        </div>
        <img className="rounded mt-[64px]" src={country.flags.png} />
        <h2 className="font-bold text-[22px] text-blackWords mt-[44px] mb-[14px]">
          {" " + country.name}
        </h2>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Native Name:
          <span className="text-[16px] text-blackWords font-normal">
            {" " + country.nativeName}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Population:
          <span className="text-[16px] text-blackWords font-normal">
            {" " + country.population}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Region:
          <span className="text-[16px] text-blackWords font-normal">
            {" " + country.region}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Sub Region:
          <span className="text-[16px] text-blackWords font-normal">
            {" " + country.subregion}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Capital:
          <span className="text-[16px] text-blackWords font-normal">
            {" " + country.capital}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mt-8 mb-3 ">
          Top Level Domains:
          <span className="text-[16px] text-blackWords font-normal">
            {" " +
              country.topLevelDomain.map((domain) => domain.name).join(", ")}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Currencies:{" "}
          <span className="text-[16px] text-blackWords font-normal">
            {country.currencies && country.currencies.length > 0
              ? country.currencies.map((currency) => currency.name).join(", ")
              : "Unknown"}
          </span>
        </p>
        <p className="text-[16px] text-blackWords font-semibold mb-3 ">
          Languages:{" "}
          <span className="text-[16px] text-blackWords font-normal">
            {country.languages && country.languages.length > 0
              ? country.languages.map((language) => language.name).join(", ")
              : "Unknown"}
          </span>
        </p>
        <h1 className="font-semibold text-[16px] text-blackWords mt-8">
          Border Countries:
        </h1>
        <div className="flex flex-wrap mt-4">
          {!country.borders ? (
            <p className=" text-yellow-500 mt-[-12px]">
              This Country has no border countries
            </p>
          ) : (
            country.borders.map((border, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md px-2 py-1 mr-2 mb-2"
                style={{ boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1)" }}
              >
                {border}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SelectedCountry;
