import Categories from "@/components/home/Categories";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";
import Motorcyle from "@/components/home/Motorcyle";
import News from "@/components/home/News";

export default function Home() {
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
