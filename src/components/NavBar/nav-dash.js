import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-white.svg";

export const NavDash = ({ navItems }) => {
  return (
    <aside className="bg-primary w-[380px] h-screen lg:flex hidden flex-col pt-[64px] ">
      <img
        src={Logo}
        alt="logo"
        className="w-[165px] h-[32px] mb-[106px] ml-[74px]"
      />
      {navItems.map(({ name, link, icon, onClick }) => (
        <NavLink
          key={name}
          to={link ?? ""}
          onClick={onClick ?? null}
          className={({ isActive }) =>
            `flex items-center ml-[40px] ${
              isActive
                ? "text-primary bg-white rounded-l-full mb-[33px] fill-primary  h-[64px]"
                : "text-white text-[18px] leading-[27px] mb-[51px]"
            }`
          }>
          <div className="ml-[35px] flex gap-[20px]">
            <img src={icon} alt={name} />
            <p className="font-semibold ">{name}</p>
          </div>
        </NavLink>
      ))}
    </aside>
  );
};
