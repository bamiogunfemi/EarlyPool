export const RadioButton = ({
  id,
  isSelected,
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <div>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isSelected}
        className="hidden"
        name={name}
      />
      <label
        htmlFor={id}
        className="before:left-0 before:top-0 before:w-[24px] before:h-[24px]  before:absolute after:absolute after:content-[''] after:rounded-[50%] before:content-[''] before:rounded-[50%]
        relative h-[24px] mb-0 cursor-pointer inline-block py-0 px-[40px] align-bottom after:top-[4px] after:left-[4px] after:w-[16px] after:h-[16px] after:bg-primary before:border-primary before:border">
        <span className="whitespace-nowrap">{label}</span>
      </label>
    </div>
  );
};
