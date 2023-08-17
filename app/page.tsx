import Categories from "@/components/home/Categories";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";
import { CategoryType } from "@/types";

async function getAllCatesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const categories = (await getAllCatesData()) as CategoryType[];
  return (
    <main>
      <HomeSwiper />
      <GeneralInfo />
      <Categories categories={categories} />
      <Motorcyle />
      <News />
    </main>
  );
}
