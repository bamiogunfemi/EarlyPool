export const Button = ({ onClick, className, children, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${className} w-full cursor-pointer bg-primary rounded-[8px]  h-[56px] text-white font-bold
    transition ease-in-out delay-150 hover:scale-105 duration-300 justify-center items-center `}>
    {children}
  </button>
);
