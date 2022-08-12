import LogoLarge from "../assets/images/logo-large.svg";
import Logo from "../assets/images/logo.svg";
/**
 * @param {string} position - The position of the logo container
 *  @param {ReactNode} children - The position of the logo container
 */
export const AuthLayout = ({ position = "left", children }) => {
  return (
    <div
      className={`flex lg:h-screen items-center ${
        position === "right" ? "lg:flex-row " : "lg:flex-row-reverse"
      } flex-col`}>
      <aside className="lg:w-7/12 w-full lg:bg-primary lg:h-screen flex items-center justify-center py-6">
        <img
          src={LogoLarge}
          alt="logo"
          className="lg:w-auto lg:h-auto w-[100px] hidden lg:flex"
        />
        <img
          src={Logo}
          alt="logo"
          className="lg:w-auto lg:h-auto w-[100px] flex lg:hidden"
        />
      </aside>
      <main className="flex justify-center  w-1/2 items-center lg:w-5/12">
        {children}
      </main>
    </div>
  );
};
