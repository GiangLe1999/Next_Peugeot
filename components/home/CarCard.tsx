import { CarType } from "@/types";
import { FC } from "react";
import NextImage from "../common/NextImage";
import { formatPrice } from "@/lib/formatData";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const buttonClasses =
  "w-full flex items-center gap-1 bg-red-700 text-white rounded-lg text-center py-2 justify-center hover:bg-red-600 relative z-50 transition";

interface Props {
  car: CarType;
}

const CarCard: FC<Props> = ({ car }): JSX.Element => {
  return (
    <div className="shadow-md rounded-lg border border-[#eee] p-4 pb-10 hover:shadow-lg transition duration-500">
      <div
      // href={"/sanpham/" + car.slug}
      >
        <div className="relative aspect-8/5 mb-3 w-[80%] mx-auto">
          <NextImage src={car.images[0]} alt={car.name} />
        </div>

        <div className="text-center pb-6">
          <h3 className="text-2xl mb-2">{car.name}</h3>
          <p className="text-xl font-bold">
            Giá từ:{" "}
            <span className="text-3xl text-red-700">
              {formatPrice(car.price)}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 items-center w-[70%] m-auto">
          <a href="tel:0962334807" className={buttonClasses}>
            <BsFillTelephoneFill /> Bấm gọi ngay
          </a>

          <Link href={"/sanpham/" + car.slug} className={buttonClasses}>
            <FaMagnifyingGlassChart /> Xem thông số
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
