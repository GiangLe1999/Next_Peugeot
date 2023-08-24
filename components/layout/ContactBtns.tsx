"use client";

import { FC, useState } from "react";
import NextImage from "../common/NextImage";
import { BsHeadset, BsWhatsapp, BsFillEnvelopeCheckFill } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import Popup from "../common/Popup";

interface Props {}

const common =
  "relative w-10 h-10 rounded-full grid place-items-center group relative";
const tooltipCommon =
  "absolute left-0 top-1 px-2 py-1 min-w-[80px] text-center rounded-r-md invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:left-[76%] transition-fadeIn text-white z-20";

const ContactBtns: FC<Props> = (props): JSX.Element => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-3 left-4 flex flex-col gap-2 z-50">
      <div className={`${common} bg-[#4267f4]`}>
        <a
          href="https://zalo.me/0377750199"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[42px] h-[42px] z-50 grid place-items-center group"
        >
          <NextImage
            src="/layout/zalo-icon.jpg"
            alt="Zalo icon"
            className="animate-wiggle"
          />
          <span className={`${tooltipCommon} bg-[#4267f4]`}>LH Zalo</span>
        </a>
      </div>

      <a href="tel:0377750199" className={`${common} bg-red-700`}>
        <BsHeadset color="white" size={22} className="animate-wiggle z-30" />
        <span className={`${tooltipCommon} bg-red-700`}>0377750199</span>
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={`${common} bg-[#714497]`}
      >
        <FaViber color="white" size={22} className="animate-wiggle" />
        <span className={`${tooltipCommon} bg-[#714497]`}>Viber</span>
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={`${common} bg-[#67c92f]`}
      >
        <BsWhatsapp color="white" size={20} className="animate-wiggle" />
        <span className={`${tooltipCommon} bg-[#67c92f]`}>Whatsapp</span>
      </a>

      <button
        onClick={() => setShowPopup(true)}
        className={`${common} bg-pink-700 cursor-pointer`}
      >
        <BsFillEnvelopeCheckFill
          color="white"
          size={19}
          className="animate-wiggle"
        />
        <span className={`${tooltipCommon} bg-pink-700`}>Báo giá</span>
      </button>

      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ContactBtns;
