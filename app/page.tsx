import Cars from "@/components/home/Cars";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";

import { NextPage } from "next";

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
