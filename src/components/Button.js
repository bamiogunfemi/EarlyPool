
import { Spinner } from "./Spinner";

export const Button = ({ onClick, className, children, disabled, loading }) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`${className} flex w-full cursor-pointer bg-primary rounded-[8px]  h-[56px] text-white font-bold
    transition ease-in-out delay-150 hover:scale-105 duration-300 justify-center items-center `}>
    {loading ? <Spinner /> : children}
  </button>
);
