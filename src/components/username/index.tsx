import classNames from "classnames";

interface UsernameProps {
  firstName: string;
  lastName: string;
  nickName: string;
  index: number;
}

const UserIconColors = ["bg-[#c985ff]", "bg-[#5b8af0]", "bg-[#eb8f24]"];

const Username = ({ firstName, lastName, nickName, index }: UsernameProps) => {
  return (
    <div className="flex items-center">
      <div
        className={`w-6 h-6 min-w-[24px] rounded-full text-xs text-white flex items-center justify-center ${
          UserIconColors[index % 3]
        }`}
      >
        {`${firstName[0]}${lastName[0]}`}
      </div>
      <span className="text-sm text-dark mx-2 whitespace-nowrap overflow-hidden text-ellipsis">{`${firstName} ${lastName}`}</span>
      <span className="text-sm text-light capitalize">{`(${nickName})`}</span>
    </div>
  );
};

export default Username;
