import classNames from "classnames";
import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={classNames(
        "rounded-md w-[106px] h-11 placeholder:text-light border border-transparent p-3 text-sm font-normal"
      )}
      {...props}
    />
  );
};

export default Input;
