"use client";

import { headerItems } from "@/data/headerItems";
import Link from "next/link";
import { FC, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

interface Props {}

const MobileNav: FC<Props> = ({}): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="min-[1162px]:hidden">
      <div onClick={() => setShowMobileNav(true)} className="cursor-pointer">
        <IoMenu color="#fffc" size={40} />
      </div>

      <div
        className={`bg-[#0b0b0b45] fixed inset-0 z-[9999] blur-beneath opacity-0 -translate-x-[100%] transition duration-500 ${
          showMobileNav && "opacity-100 translate-x-0"
        }`}
        onClick={() => setShowMobileNav(false)}
      >
        <div
          className="w-[260px] h-full bg-[#f3f3f3]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-[80px] bg-[#f2f2f2] p-5 flex items-center font-bold gap-2">
            <IoMenu size={22} /> MENU
          </div>
          <ul>
            {headerItems.map((item, index) => (
              <li
                key={index}
                className="border-t border-[#ececec] hover:bg-[#ebebeb]"
                onClick={() => setShowMobileNav(false)}
              >
                <Link
                  href={"/" + item.link}
                  className="p-5 block text-[#666666D9] text-[12.8px] font-bold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="absolute top-2 right-2"
          onClick={() => setShowMobileNav(false)}
        >
          <IoClose color="#9c9c9c" size={40} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
