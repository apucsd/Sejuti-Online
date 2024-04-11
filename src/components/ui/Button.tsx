import { ReactNode } from "react";
import { BiRightArrow } from "react-icons/bi";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`text-xl box-border  w-52 md:h-16 h-12 bg-white text-black my-2 font-semibold relative group ${className} `}
    >
      <span className="pr-8">{children}</span>
      <span className="bg-primary text-white absolute right-0 top-0  h-full flex items-center justify-center px-2 group-hover:duration-300 group-hover:w-full w-14 duration-300">
        <BiRightArrow />
      </span>
    </button>
  );
};

export default Button;
