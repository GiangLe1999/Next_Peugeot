import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick?: () => void;
  content: string;
  icon: IconType;
  iconSize: number;
  href?: string;
}

const BtnWithIcon: FC<Props> = ({
  onClick,
  content,
  icon,
  href,
  iconSize,
}): JSX.Element => {
  let Component = "button" as any;
  if (!onClick && href) {
    Component = "a" as any;
  }

  return (
    <Component
      href={href}
      onClick={onClick}
      className="bg-[#000000e6] py-[6px] px-4 text-white flex items-center gap-x-1 rounded-md transition
      hover:text-[#fe0f0f] hover:bg-white border border-transparent hover:border-[#fe0f0f] max-[438px]:w-full"
    >
      {icon({ size: iconSize })}
      {content}
    </Component>
  );
};

export default BtnWithIcon;
