import { FC } from "react";
import NextImage from "./NextImage";
import Link from "next/link";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Link href="/" className="relative w-[90px] h-[100px]">
      <NextImage src="/logo.svg" alt="Logo Peugeot" priority />
    </Link>
  );
};

export default Logo;
