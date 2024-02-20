import LightMoon from "../SVGs/LightMoon";

const Header = () => {
  return (
    <div
      className="flex flex-row items-center w-screen justify-between px-4 py-[30px] bg-white"
      style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06)" }}
    >
      <h2 className="font-bold text-blackWords text-[14px]">
        Where in the world?
      </h2>
      <div className="flex gap-2 items-center">
        <LightMoon />
        <p className=" font-semibold text-blackWords text-[12px]">Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
