import { CategoryType } from "@/types";
import { FC } from "react";
import SectionTitle from "./SectionTitle";
import CarCard from "./CarCard";

interface Props {
  category: CategoryType;
}

const CategorySection: FC<Props> = ({ category }): JSX.Element => {
  return (
    <div className="my-14">
      <SectionTitle text={category.name} />

      <div className="grid grid-cols-2 gap-8">
        {category.cars.map((car, index) => (
          <CarCard key={car._id.toString()} car={car} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
