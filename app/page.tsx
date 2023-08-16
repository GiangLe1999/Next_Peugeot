import CarList from "@/components/home/CarList";
import GeneralInfo from "@/components/home/GeneralInfo";
import HomeSwiper from "@/components/home/HomeSwiper";

export default function Home() {
  return (
    <main>
      <HomeSwiper />
      <GeneralInfo />
      <CarList />
    </main>
  );
}
