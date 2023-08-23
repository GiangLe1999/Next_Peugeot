"use client";

import { CarType } from "@/types";
import Link from "next/link";
import { FC, SetStateAction, useEffect, useState } from "react";
import NextImage from "../common/NextImage";
import { formatPrice } from "@/lib/formatData";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface Props {
  results: CarType[];
  setQuery: React.Dispatch<SetStateAction<string>>;
  query: string;
}

const SearchResults: FC<Props> = ({
  results,
  setQuery,
  query,
}): JSX.Element => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, [query]);
  return (
    <>
      {show && (
        <ul className="absolute top-[105%] left-0 w-full bg-white rounded-md py-2 shadow-lg">
          {results.map((result, index) => (
            <Link
              href={`/sanpham/${result.slug}`}
              key={result._id.toString()}
              className={`w-full text-primary flex items-center gap-4 p-3 ${
                index !== results.length - 1 && "border-b"
              } hover:bg-gray-100`}
              onClick={() => {
                setShow(false);
                setQuery("");
              }}
            >
              <div className="relative w-24 aspect-6/4 border border-[#ccc] rounded-md overflow-hidden">
                <NextImage src={result.images[0]} alt={result.name} />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-lg">{result.name}</h4>
                <p>Giá từ: {formatPrice(result.price)}</p>
              </div>

              <BsFillArrowRightCircleFill
                className="mr-4 text-secondary"
                size={22}
              />
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResults;
