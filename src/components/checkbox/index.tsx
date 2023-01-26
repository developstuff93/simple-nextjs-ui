import CheckIcon from "@/icons/check";
import classNames from "classnames";

interface CheckBoxProps {
  checked?: boolean;
  onClick: () => void;
}

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <div
      className={classNames(
        "rounded-sm w-[18px] h-[18px] flex items-center justify-center m-auto cursor-pointer",
        checked ? "bg-green" : "border-2 border-solid border-light"
      )}
      onClick={onClick}
    >
      {checked && <CheckIcon />}
    </div>
  );
};

export default CheckBox;
