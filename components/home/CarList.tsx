import { FC } from "react";
import SectionTitle from "./SectionTitle";

interface Props {}

const CarList: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container pt-8">
      <SectionTitle text="CÁC MẪU XE Ô TÔ PEUGEOT" />
    </div>
  );
};

export default CarList;
