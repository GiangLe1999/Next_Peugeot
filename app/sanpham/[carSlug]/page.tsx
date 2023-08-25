import Actions from "@/components/carPage/Actions";
import CarGeneralInfo from "@/components/carPage/CarGenerallnfo";
import CarImageGallery from "@/components/carPage/CarImageGallery";
import LoanPolicy from "@/components/carPage/LoanPolicy";
import TabContent from "@/components/carPage/TabContent";
import { getCarData, getCarPostData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export const generateMetadata = async ({ params }) => {
  try {
    const carData = await getCarData(params.carSlug);

    return {
      title: carData?.name + " | Văn Giàu Peugeot",
      description: `${carData?.name} có giá từ ${carData?.price} VNĐ. Thông số kỹ thuật và chương trình ưu đãi đặc biệt. Bảo hành chính hãng 5 năm với chương trình Peugeot Exclusive`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/sanpham/${params.carSlug}`,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface Props {
  params: { carSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const car = await getCarData(params.carSlug);
  const tabContent = await getCarPostData(params.carSlug);
  const serializedContent = (await serialize(tabContent.content, {
    parseFrontmatter: true,
  })) as MDXRemoteSerializeResult;

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-8 pt-8 pb-3 max-[887px]:grid-cols-1">
        <div>
          <CarImageGallery images={car?.images || []} />
        </div>

        <div>
          <CarGeneralInfo car={car} />
          <Actions />
        </div>
      </div>

      <LoanPolicy />

      <TabContent tabContent={serializedContent} slug={params.carSlug} />
    </div>
  );
};

export default page;
