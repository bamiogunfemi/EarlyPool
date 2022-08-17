import { NavDash } from "../components/NavBar/nav-dash";
import { navItems } from "../utils/data";
import Notification from "../assets/images/notification.svg";
import Memoji from "../assets/images/memji.svg";

export const AdminLayout = ({ children, title }) => {
  return (
    <main className="flex">
      <h3 className="flex md:hidden h-screen font-semibold items-center justify-center w-screen text-center">
        Ooops this is a mobile only site
      </h3>
      <NavDash navItems={navItems} />
      <div className="p-[58px] w-full lg:block hidden ">
        <div className="mb-[54px] flex justify-between">
          <p className="font-semibold text-[24px]">{title}</p>
          <div className="flex items-center gap-[31px]">
            <img
              src={Notification}
              alt="notification"
              className="w-[26px] h-[32px]"
            />
            <div className="w-[44px] h-[47px] rounded-full flex justify-center items-center border border-primary  bg-[#D9D9D9]">
              <img
                src={Memoji}
                alt="notification"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};
