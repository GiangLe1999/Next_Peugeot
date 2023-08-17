import { CarType } from "@/types";
import { FC } from "react";
import NextImage from "../common/NextImage";
import { formatPrice } from "@/lib/formatData";
import Link from "next/link";

interface Props {
  car: CarType;
  index: number;
}

const CarCard: FC<Props> = ({ car, index }): JSX.Element => {
  return (
    <Link
      href={"/sanpham/" + car.slug}
      className="shadow-md rounded-lg border border-[#eee] p-4 hover:scale-[1.01] hover:shadow-lg transition duration-500"
    >
      <div className="relative w-full aspect-6/4">
        <NextImage src={car.images[index]} alt={car.name} />
      </div>

      <div className="text-center pb-6">
        <h3 className="text-2xl mb-2">{car.name}</h3>
        <p className="text-xl font-bold">
          Giá từ: <span className="text-3xl">{formatPrice(car.price)}</span>
        </p>
      </div>
    </Link>
  );
};

export default CarCard;
