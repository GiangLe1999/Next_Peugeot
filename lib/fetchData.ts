import { CarType } from "@/types";

export const getAllCatesData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<CarType[]>;
  } catch (error) {
    console.log(error);
  }
};

export const getCarData = async (carSlug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/car?slug=${carSlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<CarType>;
  } catch (error) {
    console.log(error);
  }
};

export const getCarPostData = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
