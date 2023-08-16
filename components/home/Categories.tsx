import { FC } from "react";
import CategorySection from "./CategorySection";
import { CategoryType } from "@/types";

interface Props {
  categories: CategoryType[];
}

const Categories: FC<Props> = async ({ categories }) => {
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

export default Categories;
