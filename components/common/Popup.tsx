"use client";

import { FC } from "react";
import NextImage from "./NextImage";
import { IoClose } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import ResultPopup from "./ResultPopup";
import { useForm } from "@/hook/useForm";

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const inputClasses = "rounded-md border border-[#ccc] py-2 px-4";

const Popup: FC<Props> = ({ setShowPopup }): JSX.Element => {
  const {
    name,
    setName,
    phone,
    setPhone,
    carType,
    setCarType,
    loading,
    showResult,
    status,
    closeModalHandler,
    formSubmitHandler,
  } = useForm(setShowPopup);

  return (
    <div
      className="bg-[#000000cc] fixed inset-0 h-full z-[9999] blur-beneath"
      onClick={closeModalHandler}
    >
      {!showResult && (
        <form
          className="w-1/2 m-auto bg-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md"
          onClick={(e) => e.stopPropagation()}
          onSubmit={formSubmitHandler}
        >
          <button
            onClick={closeModalHandler}
            type="button"
            className="absolute top-2 right-2 z-50 bg-[#00000088] rounded-full p-1 opacity-80 hover:opacity-100 transition"
          >
            <IoClose color="white" size={24} />
          </button>

          <div className="w-full aspect-5/2 relative rounded-t-md overflow-hidden">
            <NextImage src="/home/popup/popup.jpg" alt="Popup banner" />
          </div>

          <div className="p-9">
            <h5 className="text-center font-bold text-4xl mb-4">
              Đăng ký nhận báo giá
            </h5>
            <p className="text-center text-lg font-semibold mb-3">
              Vui lòng cung cấp thông tin, chúng tôi sẽ liên hệ Anh/Chị ngay!
            </p>

            <div className="flex flex-col mb-3">
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder="Trần Văn A"
                className={inputClasses}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label>Chọn loại xe</label>
              <select
                className={inputClasses}
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
              >
                <option value="2008">PEUGEOT 2008</option>
                <option value="3008">PEUGEOT 3008</option>
                <option value="5008">PEUGEOT 5008</option>
                <option value="traveller">PEUGEOT TRAVELLER</option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label>Số điện thoại</label>
              <input
                type="number"
                placeholder="0962334807"
                className={inputClasses}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-black text-white rounded-md py-3 text-lg font-bold"
              type="submit"
            >
              {loading ? (
                <span className="flex items-center gap-1 justify-center">
                  <BiLoaderCircle
                    color="white"
                    className="animate-spin"
                    size={22}
                  />
                  Đang xử lý ...
                </span>
              ) : (
                "Đăng ký ngay"
              )}
            </button>
          </div>
        </form>
      )}

      {showResult && status === "success" && (
        <ResultPopup
          status={status}
          title="Đăng ký thành công!"
          message="Chúng tôi sẽ liên hệ đến Anh / Chị trong thời gian sớm nhất."
          confirmHandler={closeModalHandler}
        />
      )}

      {showResult && status === "error" && (
        <ResultPopup
          status={status}
          title="Đăng ký thất bại!"
          message="Anh / Chị vui lòng nhập đầy đủ thông tin."
          confirmHandler={closeModalHandler}
        />
      )}
    </div>
  );
};

export default Popup;
