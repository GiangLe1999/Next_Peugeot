import { FC } from "react";
import { BiSolidTimer } from "react-icons/bi";
import { RiMoneyDollarCircleFill, RiWaterPercentFill } from "react-icons/ri";

interface Props {}

const commonClass = "flex items-center gap-x-1";

const LoanPolicy: FC<Props> = (props): JSX.Element => {
  return (
    <div className="border border-primary mb-6 p-4 font-bold rounded-md">
      <p className="pb-4 border-b border-[#ccc]">
        Hỗ trợ mua xe Peugeot trả góp lên đến 8 năm - Lãi suất thấp - Thủ tục
        đơn giản, nhanh chóng.
      </p>

      <p className="mt-4 flex gap-x-5 flex-wrap">
        <span className={commonClass}>
          <BiSolidTimer size={21} />
          <span>Thời gian xét duyệt:</span> 1 ngày
        </span>

        <span className={commonClass}>
          <RiMoneyDollarCircleFill size={18} /> <span>Hạn mức vay:</span> 90%
          giá trị xe
        </span>

        <span className={commonClass}>
          <RiWaterPercentFill size={18} />
          Lãi suất: từ 9,5%/ 1 năm
        </span>
      </p>
    </div>
  );
};

export default LoanPolicy;
