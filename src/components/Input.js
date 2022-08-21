export const Input = ({
  type,
  placeholder,
  className,
  name,
  value,
  onChange,
  defaultValue,
  disabled,
  onFocus,
  onBlur,
  id,
  onKeyDown,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      disabled={disabled}
      id={id}
      defaultValue={defaultValue}
      {...props}
      className={`${className} px-[24px] focus:ring-primary h-[56px] text-primary placeholder:text-primary  placeholder:font-[16px] font-[16px] leading-[24px]  block w-full sm:text-sm border-primary border rounded-[8px]`}
    />
  );
};
