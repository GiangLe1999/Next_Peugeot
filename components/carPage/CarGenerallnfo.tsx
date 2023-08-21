import { CarType } from "@/types";
import { FC } from "react";
import { formatPrice } from "@/lib/formatData";
import { AiFillCheckSquare } from "react-icons/ai";

interface Props {
  car?: CarType;
}

const benefits = [
  "Giảm Ngay 50% Lệ Phí Trước Bạ.",
  "Giảm Trực Tiếp Vào Giá Bán.",
  "Trả Trước Chỉ Từ 20% – Nhận Xe Ngay.",
  "Hỗ Trợ Lái Thử Tại Nhà.",
];

const CarGeneralInfo: FC<Props> = ({ car }): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-center font-bold mb-4">
        <h1 className="text-2xl">{car?.name}</h1>
        <p className="text-xl">{formatPrice(car?.price as number)}</p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Giá xe {car?.name}</h3>
        {car?.children.map((child) => (
          <p key={child.name} className="mb-1 font-bold">
            {child.name}: Giá từ {formatPrice(child.price)}
          </p>
        ))}
      </div>

      <div className="text-primary bg-[#f8e9e9] mt-6 rounded-md p-5">
        <h4 className="text-xl font-bold mb-3">
          KHUYẾN MÃI KHI MUA XE PEUGEOT
        </h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-x-1">
              <AiFillCheckSquare />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarGeneralInfo;
