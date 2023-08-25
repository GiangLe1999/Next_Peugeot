"use client";

import { headerItems } from "@/data/headerItems";
import Link from "next/link";
import { FC } from "react";
import { ImSearch } from "react-icons/im";
import SearchBar from "./SearchBar";
import useDropdown from "@/hook/useDropdown";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const navItemClasses =
  "text-[#fffc] text-sm font-bold inline-block py-3 px-2 group-hover:text-white transition border-[2px] border-transparent rounded-md";

interface Props {}

const HeaderItems: FC<Props> = (props): JSX.Element => {
  const { data: session } = useSession() as any;
  const role = session?.user?.role;
  const pathname = usePathname() || "";
  const { show, setShow, innerRef } = useDropdown();

  return (
    <ul className="text-white flex items-center gap-2">
      {role === "admin" && (
        <li className="hover:text-white group max-[1161px]:hidden">
          <Link
            href={`/admin`}
            className={`${navItemClasses} ${
              pathname && pathname?.includes("/admin")
                ? "text-white border-white"
                : ""
            } `}
          >
            ADMIN
          </Link>
        </li>
      )}
      {headerItems.map((item, index) => (
        <li key={index} className="hover:text-white group max-[1161px]:hidden">
          <Link
            href={`/${item.link}`}
            className={`${navItemClasses} ${
              pathname.includes(item.link) && "text-white border-white"
            } `}
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
        <ImSearch className="text-[#fffc] group-hover:text-white transition w-4 h-4 max-[1161px]:w-6 max-[1161px]:h-6" />

        <SearchBar showSearch={show} />
      </div>
    </ul>
  );
};

export default HeaderItems;
