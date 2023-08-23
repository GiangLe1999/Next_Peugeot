import { FC } from "react";
import ResultPopup from "../common/ResultPopup";

interface Props {
  closeModalHandler: () => void;
  status: string;
}

const FooterResultPopup: FC<Props> = ({
  closeModalHandler,
  status,
}): JSX.Element => {
  return (
    <div
      className="bg-[#000000cc] fixed inset-0 h-full z-[9999] blur-beneath"
      onClick={closeModalHandler}
    >
      {status === "error" ? (
        <ResultPopup
          status={status}
          title="Đăng ký thất bại!"
          message="Anh / Chị vui lòng nhập đầy đủ thông tin."
          confirmHandler={closeModalHandler}
        />
      ) : (
        <ResultPopup
          status={status}
          title="Đăng ký thành công!"
          message="Chúng tôi sẽ liên hệ đến Anh / Chị trong thời gian sớm nhất."
          confirmHandler={closeModalHandler}
        />
      )}
    </div>
  );
};

export default FooterResultPopup;
