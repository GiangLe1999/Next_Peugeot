import { FC } from "react";
import Logo from "../common/Logo";
import HeaderItems from "./HeaderItems";
import { NextAuthProvider } from "@/lib/authProviders";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <header className="bg-primary h-[100px]">
      <nav className="container flex justify-between">
        <Logo />

        <NextAuthProvider>
          <HeaderItems />
        </NextAuthProvider>
      </nav>
    </header>
  );
};

export default Header;
