import { FC } from "react";
import SocialLinks from "../common/SocialLinks";

interface Props {}

const GeneralInfo: FC<Props> = (props): JSX.Element => {
  return (
    <div className="bg-primary">
      <div className="container pt-8 pb-16 text-white grid grid-cols-3 gap-x-20 max-[1000px]:gap-0 max-[800px]:grid-cols-2 max-[800px]:gap-y-10 max-[570px]:grid-cols-1">
        <div className="max-w-[350px] font-bold leading-7">
          Peugeot Văn Giàu: Cập nhật thông tin bảng giá, chương trình ưu đãi,
          bài đánh giá và cảm nhận khách hàng về xe ô tô Peugeot.
        </div>

        <ul className="list-disc space-y-3 ml-16 max-[570px]:ml-4">
          <li>Chương trình ưu đãi.</li>
          <li>Quà tặng giá trị từ hãng.</li>
          <li>Cập nhật bảng giá xe ô tô Peugeot.</li>
        </ul>

        <div className="">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
