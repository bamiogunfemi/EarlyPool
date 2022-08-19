import LogoLarge from "../assets/images/logo-large.svg";
import Logo from "../assets/images/logo.svg";
/**
 * @param {string} position - The position of the logo container
 *  @param {ReactNode} children - The position of the logo container
 *   @param {string} title - Title of page
 * @param {string} description - Description of page
 */
export const AuthLayout = ({
  position = "left",
  children,
  title,
  description,
}) => {
  return (
    <div
      className={`relative flex lg:h-screen items-center overflow-x-hidden ${
        position === "right" ? "lg:flex-row " : "lg:flex-row-reverse"
      } flex-col 
      
      `}>
      <aside
        className={`lg:w-7/12 w-full lg:bg-primary lg:h-screen flex items-center justify-center py-6 bg-white shadow lg:shadow-none fixed lg:relative top-0  lg:py-2 lg:pt-2 z-30 lg:z-0`}>
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
      <main className="flex flex-col justify-center lg:px-[67px] px-[20px] w-full lg:w-5/12 mt-[80px] max-w-[600px] lg:mx-auto">
        <h2 className="font-bold lg:text-[48px] text-[24px] text-primary mb-[14px] ">
          {title}
        </h2>
        <p className="font-normal text-primary lg:text-[20px] text-[18px] mb-[20px] lg:mb-[43px]">
          {description}
        </p>
        {children}
      </main>
    </div>
  );
};
