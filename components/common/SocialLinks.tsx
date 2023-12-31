import { FC } from "react";
import { BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Props {
  light?: boolean;
}

const SocialLinks: FC<Props> = ({ light }): JSX.Element => {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      <div
        className={`socialIcon hover:bg-[#3A589C] ${
          light && "bg-[#3A589C] lightSocialIcon"
        }`}
      >
        <a
          href="https://www.facebook.com/Peugeotkhanhhoa1?mibextid=ZbWKwL"
          target="_blank"
        >
          <BiLogoFacebook size={20} />
        </a>
      </div>

      <div
        className={`socialIcon hover:bg-[#962e92] ${
          light && "bg-[#962e92] lightSocialIcon"
        }`}
      >
        <a href="mailto:phamgiau190@gmail.com">
          <MdEmail size={20} />
        </a>
      </div>

      <div
        className={`socialIcon hover:bg-[#51cb5a] ${
          light && "bg-[#51cb5a] lightSocialIcon"
        }`}
      >
        <a href="tel:0377750199">
          <FaPhoneAlt size={18} />
        </a>
      </div>

      <div
        className={`socialIcon hover:bg-[#c33223] ${
          light && "bg-[#c33223] lightSocialIcon"
        }`}
      >
        <a href="" target="_blank">
          <BiLogoYoutube size={22} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
