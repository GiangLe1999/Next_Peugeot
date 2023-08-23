import { FC } from "react";
import { CarType } from "@/types";
import CarCard from "./CarCard";
import SectionTitle from "./SectionTitle";

interface Props {
  cars: CarType[];
}

const Cars: FC<Props> = ({ cars }) => {
  return (
    <div className="container py-12">
      <SectionTitle text="MẪU Ô TÔ PEUGEOT" />

      <div className="container grid grid-cols-2 gap-10">
        {cars.map((car) => {
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
