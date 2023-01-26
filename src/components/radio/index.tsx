import classNames from "classnames";

interface RadioButtonProps {
  checked?: boolean;
  onClick: () => void;
}

const RadioButton = ({ checked, onClick }: RadioButtonProps) => {
  return (
    <div
      className={classNames(
        "rounded-full w-[18px] h-[18px] flex items-center justify-center border-2 border-solid m-auto cursor-pointer",
        checked ? "bg-white border-green" : "border-light"
      )}
      onClick={onClick}
    >
      {checked && <div className="rounded-full bg-green w-3 h-3" />}
    </div>
  );
};

export default RadioButton;
