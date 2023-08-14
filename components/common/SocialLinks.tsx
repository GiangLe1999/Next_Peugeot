import { FC } from "react";
import { BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Props {}

const SocialLinks: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex gap-x-3">
      <div className="socialIcon hover:bg-[#3A589C]">
        <a href="" target="_blank">
          <BiLogoFacebook />
        </a>
      </div>

      <div className="socialIcon hover:bg-[#962e92]">
        <a href="" target="_blank">
          <MdEmail size={14} />
        </a>
      </div>

      <div className="socialIcon hover:bg-[#51cb5a]">
        <a href="" target="_blank">
          <FaPhoneAlt size={12} />
        </a>
      </div>

      <div className="socialIcon hover:bg-[#c33223]">
        <a href="" target="_blank">
          <BiLogoYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
