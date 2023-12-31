import { FC } from "react";
import BtnWithIcon from "../common/BtnWithIcon";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SocialLinks from "../common/SocialLinks";

interface Props {}

const Actions: FC<Props> = (props): JSX.Element => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <BtnWithIcon
          icon={BsFillTelephoneFill}
          iconSize={15}
          content="Hotline: 0377.750.199"
          href="tel:0377750199"
        />

        <BtnWithIcon
          icon={MdEmail}
          iconSize={18}
          content="Báo giá lăn bánh"
          href="#baogia"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        Hoặc liên hệ thông qua: <SocialLinks light />
      </div>
    </div>
  );
};

export default Actions;
