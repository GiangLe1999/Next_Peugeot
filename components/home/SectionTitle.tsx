import { FC } from "react";

interface Props {
  text: string;
}

const SectionTitle: FC<Props> = ({ text }): JSX.Element => {
  return (
    <div className="flex items-center justify-between gap-x-5 mb-10">
      <div className="h-[2px] w-full bg-secondary"></div>
      <h2 className="text-3xl uppercase font-bold min-w-fit block">{text}</h2>
      <div className="h-[2px] w-full bg-secondary"></div>
    </div>
  );
};

export default SectionTitle;
