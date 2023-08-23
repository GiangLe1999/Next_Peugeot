import Cars from "@/components/home/Cars";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";
import { getAllCarsData } from "@/lib/fetchData";
import { CarType } from "@/types";

export default async function Home() {
  const cars = (await getAllCarsData()) as CarType[];
  return (
    <main className="relative">
      <HomeSwiper />
      <GeneralInfo />
      <Cars cars={cars} />
      <Motorcyle />
      <News />
    </main>
  );
}
