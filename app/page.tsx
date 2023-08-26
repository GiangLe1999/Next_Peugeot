import Cars from "@/components/home/Cars";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";

import { NextPage } from "next";

export const generateMetadata = () => {
  return {
    title: "Peugeot Khánh Hòa | Peugeot 2008, Peugeot 3008, Peugeot 5008",
    description:
      "Cập nhật bảng giá xe Peugeot mới nhất gồm các dòng xe ô tô 4 bánh: 2008, 3008, 5008, Traveller cùng các khuyến mãi đi kèm. Cùng tham khảo trước khi mua xe.",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

interface Props {}

const page: NextPage<Props> = async () => {
  return (
    <main className="relative">
      <HomeSwiper />
      <GeneralInfo />
      <Cars />
      <Motorcyle />
      <News />
    </main>
  );
};

export default page;
