"use client";

import { headerItems } from "@/data/headerItems";
import Link from "next/link";
import { FC } from "react";
import { ImSearch } from "react-icons/im";
import SearchBar from "./SearchBar";
import useDropdown from "@/hook/useDropdown";

interface Props {}

const HeaderItems: FC<Props> = (props): JSX.Element => {
  const { show, setShow, innerRef } = useDropdown();

  return (
    <ul className="text-white flex items-center">
      {headerItems.map((item, index) => (
        <li key={index} className="hover:text-white group">
          <Link
            href={`/${item.link}`}
            className="text-[#fffc] text-[12.8px] font-bold inline-block py-7 px-2 group-hover:text-white transition"
          >
            {item.title}
          </Link>
        </li>
      ))}
      <div
        className="px-2 cursor-pointer group relative"
        onClick={() => setShow(true)}
        ref={innerRef}
      >
        <ImSearch
          size={16}
          className="text-[#fffc] group-hover:text-white transition"
        />

        <SearchBar showSearch={show} />
      </div>
    </ul>
  );
};

export default HeaderItems;
