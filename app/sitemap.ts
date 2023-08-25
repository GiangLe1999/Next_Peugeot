import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

  dbConnect();
  const cars = await Car.find().select("slug updatedAt");

  const carLinks = cars?.map((car) => ({
    url: `${baseURL}/sanpham/${car.slug}`,
    lastModified: new Date(car.updatedAt),
  }));

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/lien-he`,
      lastModified: new Date(),
    },
    ...carLinks,
  ];
}
