import { getCarData } from "@/lib/fetchData";
import { NextPage } from "next";

interface Props {
  params: { carSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const car = await getCarData(params.carSlug);
  console.log(car);

  return <div>page</div>;
};

export default page;
