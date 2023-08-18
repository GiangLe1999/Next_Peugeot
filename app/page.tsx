import Categories from "@/components/home/Categories";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";
import { getAllCatesData } from "@/lib/fetchData";
import { CategoryType } from "@/types";

export default async function Home() {
  // const categories = (await getAllCatesData()) as CategoryType[];
  return (
    <main>
      <HomeSwiper />
      <GeneralInfo />
      <Categories />
      <Motorcyle />
      <News />
    </main>
  );
}
