import { FC } from "react";
import SectionTitle from "./SectionTitle";

interface Props {}

const News: FC<Props> = (props): JSX.Element => {
  return (
    <div className="bg-[#eaeaea] py-8 mt-12">
      <div className="container">
        <SectionTitle text="TIN TỨC & SỰ KIỆN" />
      </div>
    </div>
  );
};

export default News;
