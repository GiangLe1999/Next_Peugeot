import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { getAllCatesData } from "@/lib/fetchData";
import CategorySection from "./CategorySection";
import { CategoryType } from "@/types";

interface Props {}

const CarList: FC<Props> = async (props) => {
  const categories = (await getAllCatesData()) as CategoryType[];
  return (
    <div className="container pt-8">
      {categories.map((category) => {
        if (category.name === "PEUGEOT DJANGO") {
          return;
        }
        return (
          <CategorySection key={category._id.toString()} category={category} />
        );
      })}
    </div>
  );
};

export default CarList;
