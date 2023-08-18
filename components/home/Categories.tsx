"use client";

import { FC, useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import { CategoryType } from "@/types";

interface Props {
  // categories: CategoryType[];
}

const Categories: FC<Props> = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetch(`/api/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
