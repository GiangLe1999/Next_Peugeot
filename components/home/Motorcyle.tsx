import { FC } from "react";
import SectionTitle from "./SectionTitle";
import NextImage from "../common/NextImage";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface Props {}

const Motorcyle: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container pb-8">
      <SectionTitle text="MẪU XE MÁY PEUGEOT MOTOCYCLES" />
      <div className="grid grid-cols-2 gap-x-5">
        <div className="w-full aspect-6/4 relative px-5 pb-8">
          <NextImage
            src="/home/django/uu-dai-django-125-abs.jpg"
            alt="Ưu đãi Django 125 ABS"
          />
        </div>

        <div className="text-center px-5 pb-8">
          <h3 className="font-bold text-3xl mb-[14px]">DJANGO 125 ABS</h3>
          <h4 className="font-bold text-base tracking-wide mb-[25px]">
            ĐIỂM SẮC MÀU TÔ CÁ TÍNH
          </h4>
          <p className="leading-7 text-justify text-base mb-5">
            Lấy cảm hứng từ mẫu xe Peugeot S55 huyền thoại, Peugeot Django sở
            hữu các đường nét tinh tế thanh lịch đậm chất Pháp, giúp khách hàng
            tự tin thể hiện phong cách cá nhân và tận hưởng trọn vẹn niềm vui
            khi lái xe hòa mình vào nhịp sống năng động tại đô thị.
          </p>
          <div className="space-y-1">
            <p>Giá bán</p>
            <p>(đã bao gồm VAT)</p>
            <p className="text-3xl font-bold">68.000.000 VND</p>
          </div>

          <div className="px-4 flex justify-center mt-3">
            <Link
              className="bg-secondary text-white w-fit pl-4 pr-2 py-2 text-xs font-bold flex items-center gap-x-1"
              href="/sanpham/peugeot-django-125-abs"
            >
              Tìm hiểu thêm <BiChevronRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motorcyle;
