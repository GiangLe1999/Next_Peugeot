import { FC } from "react";
import FooterForm from "./FooterForm";
import NextImage from "../common/NextImage";
import Link from "next/link";
import SocialLinks from "../common/SocialLinks";

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  return (
    <footer className="bg-primary">
      <div className="container flex gap-x-10 pt-14 pb-5">
        <div className="relative w-1/2 aspect-video">
          <NextImage
            src="/layout/peugeot-footer.jpg"
            alt="Footer Peugeot"
            className="rounded-md"
          />
        </div>

        <FooterForm />
      </div>

      <div className="container flex text-white py-20">
        <div className="w-[46%]">
          <h4 className="footerTitle">Peugeot Văn Giàu</h4>
          <p>Peugeot Cam Ranh - Đại Lý Chính Hãng Peugeot Việt Nam.</p>
          <p>Showroom: 1580 Hùng Vương, Cam Phú, Cam Ranh, Khánh Hòa</p>
        </div>

        <div className="w-[27%]">
          <h4 className="footerTitle">Hỗ trợ khách hàng</h4>
          <p>Hotline: 0975.047.068</p>
          <p>Email:</p>
          <p>peugeotsaigon.com.vn@gmail.com</p>
        </div>

        <div className="w-[27%]">
          <h4 className="footerTitle">Follow</h4>
          <li>
            <Link href="">TRẢI NGHIỆM KHÁCH HÀNG</Link>
          </li>
          <li>
            <Link href="">CHÍNH SÁCH BẢO MẬT</Link>
          </li>
          <li className="mb-4">
            <Link href="">LIÊN HỆ</Link>
          </li>
          <SocialLinks />
        </div>
      </div>

      <div className="container text-center py-5">
        <p className="text-[#ffffff80]">
          © Bản quyền thuộc về Peugeot | Thiết kế và duy trì bởi{" "}
          <a
            className="text-[#bfbfbf]"
            href="https://github.com/GiangLe1999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giang Le
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
