import CarGeneralInfo from "@/components/carPage/CarGenerallnfo";
import CarImageGallery from "@/components/carPage/CarImageGallery";
import { getCarData } from "@/lib/fetchData";
import { NextPage } from "next";

interface Props {
  params: { carSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const car = await getCarData(params.carSlug);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-8 py-8">
        <div>
          <CarImageGallery images={car?.images || []} />
        </div>

        <div>
          <CarGeneralInfo car={car} />
        </div>
      </div>
    </div>
  );
};

export default page;
