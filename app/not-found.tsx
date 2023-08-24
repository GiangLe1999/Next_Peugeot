import NextImage from "@/components/common/NextImage";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const NotFound: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <div className="container text-center py-12">
        <div className="relative w-1/2 aspect-6/4 py-12 mx-auto">
          <NextImage src="/404/404.jpg" alt="Not found" />
        </div>

        <h1 className="my-12 font-bold text-2xl">Trang không tồn tại – 404!</h1>
        <div className="flex justify-center">
          <Link
            className="px-4 py-3 bg-primary text-white font-bold text-center w-96 rounded-md"
            href="/"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
