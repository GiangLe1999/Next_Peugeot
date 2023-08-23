"use client";

import { FC } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  title: string;
  message: string;
  status: string;
  confirmHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultPopup: FC<Props> = ({
  title,
  message,
  status,
  confirmHandler,
}): JSX.Element => {
  return (
    <div
      className="w-1/2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white text-center p-9 rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-center mb-4">
        {status === "error" ? (
          <AiOutlineCloseCircle color="red" size={80} />
        ) : (
          <AiOutlineCheckCircle color="green" size={80} />
        )}
      </div>
      <h5 className="text-3xl font-bold mb-3">{title}</h5>
      <p className="mb-3">{message}</p>
      <button
        className="py-2 px-4 bg-black text-white font-bold rounded-md"
        onClick={() => confirmHandler(false)}
      >
        Xác nhận
      </button>
    </div>
  );
};

export default ResultPopup;
