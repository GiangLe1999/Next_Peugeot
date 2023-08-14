import { FC } from "react";
import NextImage from "./NextImage";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <div className="relative w-[90px] h-[100px]">
      <NextImage src="logo.svg" alt="Logo Peugeot" priority />
    </div>
  );
};

export default Logo;
