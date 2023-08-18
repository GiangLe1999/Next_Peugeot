import { CarType } from "@/types";
import { FC } from "react";
import { formatPrice } from "@/lib/formatData";

interface Props {
  car?: CarType;
}

const CarGeneralInfo: FC<Props> = ({ car }): JSX.Element => {
  return (
    <div>
      <h1>{car?.name}</h1>
      <p>{formatPrice(car?.price as number)}</p>
      <div>
        {car?.children.map((child) => (
          <p key={child.name}>
            {child.name}: Giá từ {formatPrice(child.price)}
          </p>
        ))}
      </div>

      <div className="text-primary bg-[#f8e9e9]">
        <h3>KHUYẾN MÃI KHI MUA XE PEUGEOT</h3>
        <ul>
          <li>Giảm Ngay 50% Lệ Phí Trước Bạ.</li>
          <li>Giảm Trực Tiếp Vào Giá Bán.</li>
          <li>Trả Trước Chỉ Từ 20% – Nhận Xe Ngay.</li>
          <li>Hỗ Trợ Lái Thử Tại Nhà.</li>
        </ul>
      </div>
    </div>
  );
};

export default CarGeneralInfo;
