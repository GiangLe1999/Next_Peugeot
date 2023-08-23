import { FC } from "react";
import CarCard from "./CarCard";
import SectionTitle from "./SectionTitle";
import { getAllCarsData } from "@/lib/fetchData";
import { CarType } from "@/types";

interface Props {}

const Cars: FC<Props> = async () => {
  const cars = (await getAllCarsData()) as CarType[];

  return (
    <div className="container py-12">
      <SectionTitle text="MẪU Ô TÔ PEUGEOT" />

      <div className="container grid grid-cols-2 gap-10">
        {cars?.length > 0 &&
          cars?.map((car) => {
            if (car.name === "Peugeot Django") {
              return;
            }
            return <CarCard car={car} key={car._id.toString()} />;
          })}
      </div>
    </div>
  );
};

export default Cars;
