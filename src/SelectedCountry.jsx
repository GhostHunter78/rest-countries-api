import { useNavigate, useParams } from "react-router-dom";
import ArrowLeftLight from "./SVGs/ArrowLeftLight";
import ArrowLeftDark from "./SVGs/ArrowLeftDark";
import data from "./data.json";

const SelectedCountry = ({ activeTheme }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const { name } = useParams();
  const country = data.find((country) => country.name === name);

  // Check if country is found
  if (!country) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-start px-[28px] pt-[40px] pb-[60px] lg:px-[60px] h-screen">
        <div
          className="flex items-center gap-2 px-6 py-[7px] rounded cursor-pointer"
          style={{ boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.29)" }}
          onClick={handleNavigation}
        >
          {activeTheme === "light" ? <ArrowLeftLight /> : <ArrowLeftDark />}
          <p
            className="text-[16px] font-normal"
            style={{ color: activeTheme === "light" ? "#111517" : "white" }}
          >
            Back
          </p>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-[145px] lg:items-center">
          <img
            className="rounded mt-[64px] lg:w-[560px] lg:h-[401px]"
            src={country.flags.png}
          />
          <div className="">
            <div className="lg:flex items-center gap-[117px]">
              <div className="">
                <h2
                  className="font-bold text-[22px] mt-[44px] mb-[14px] lg:text-[32px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  {" " + country.name}
                </h2>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Native Name:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.nativeName}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Population:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.population}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Region:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.region}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Sub Region:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.subregion}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Capital:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.capital}
                  </span>
                </p>
              </div>
              <div className="">
                <p
                  className="text-[16px] font-normal mt-8 mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Top Level Domains:
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {" " + country.topLevelDomain}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Currencies:{" "}
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {country.currencies && country.currencies.length > 0
                      ? country.currencies
                          .map((currency) => currency.name)
                          .join(", ")
                      : "Unknown"}
                  </span>
                </p>
                <p
                  className="text-[16px] font-normal mb-3 lg:text-[20px]"
                  style={{
                    color: activeTheme === "light" ? "#111517" : "white",
                  }}
                >
                  Languages:{" "}
                  <span
                    className="text-[16px] font-light lg:text-[18px]"
                    style={{
                      color: activeTheme === "light" ? "#111517" : "white",
                    }}
                  >
                    {country.languages && country.languages.length > 0
                      ? country.languages
                          .map((language) => language.name)
                          .join(", ")
                      : "Unknown"}
                  </span>
                </p>
              </div>
            </div>
            <div className="">
              <h1
                className="font-semibold text-[16px] mt-8 lg:text-[20px]"
                style={{ color: activeTheme === "light" ? "#111517" : "white" }}
              >
                Border Countries:
              </h1>
              <div className="flex flex-wrap mt-4">
                {!country.borders ? (
                  <p className=" text-yellow-500 mt-[-12px] lg:text-[18px]">
                    This Country has no border countries
                  </p>
                ) : (
                  country.borders.map((border, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-md px-2 py-1 mr-2 mb-2"
                      style={{
                        boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1)",
                        color: activeTheme === "light" ? "#111517" : "white",
                      }}
                    >
                      {border}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCountry;
