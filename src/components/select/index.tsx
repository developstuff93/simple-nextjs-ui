interface Option {
  value: any;
  label: any;
}

interface SelectProps {
  selected: any;
  options: Option[];
  onSelect: (value: any) => void;
}

const Select = ({ selected, options, onSelect }: SelectProps) => {
  return (
    <select
      className="h-11 w-[118px] p-3 border-transparent border border-solid text-sm font-normal"
      value={selected}
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
