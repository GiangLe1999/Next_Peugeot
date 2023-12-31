"use client";

import { useForm } from "@/hook/useForm";
import { FC, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import FooterResultPopup from "./FooterResultPopup";

interface Props {}

const FooterForm: FC<Props> = (props): JSX.Element => {
  const [showPopup, setShowPopup] = useState(false);

  const {
    name,
    setName,
    setPhone,
    setCarType,
    loading,
    status,
    closeModalHandler,
    formSubmitHandler,
  } = useForm(setShowPopup);

  return (
    <form className="flex-1" id="baogia" onSubmit={formSubmitHandler}>
      <h4 className="text-center text-3xl font-black py-4 text-[#1565c0]">
        NHẬN BÁO GIÁ & ĐĂNG KÝ LÁI THỬ
      </h4>

      {/* Loại xe */}
      <div className="formInputWrapper">
        <label className="formLabel" htmlFor="loaixe">
          Chọn loại xe
        </label>
        <select
          id="loaixe"
          className="formInput"
          onChange={(e) => setCarType(e.target.value)}
        >
          <option value="">--- Chọn loại xe ----</option>
          <option value="2008">PEUGEOT 2008</option>
          <option value="3008">PEUGEOT 3008</option>
          <option value="5008">PEUGEOT 5008</option>
          <option value="traveller">PEUGEOT TRAVELLER</option>
        </select>
      </div>

      {/* Hình thức */}
      {/* <div className="formInputWrapper">
        <label className="formLabel" htmlFor="hinhthuc1">
          Hình thức thanh toán
        </label>

        <div className="flex gap-x-6">
          <div className="space-x-2">
            <input type="radio" name="hinhthuc" id="hinhthuc1" />
            <label htmlFor="hinhthuc1" className="text-white text-lg">
              Trả góp
            </label>
          </div>

          <div className="space-x-2">
            <input type="radio" name="hinhthuc" id="hinhthuc2" />
            <label htmlFor="hinhthuc2" className="text-white text-lg">
              Trả hết
            </label>
          </div>
        </div>
      </div> */}

      {/* Họ tên */}
      <div className="formInputWrapper">
        <label className="formLabel" htmlFor="hoten">
          Họ tên *
        </label>

        <input
          type="text"
          className="formInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Điện thoại */}
      <div className="formInputWrapper">
        <label className="formLabel" htmlFor="sdt">
          Điện thoại *
        </label>

        <input
          type="number"
          className="formInput"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="uppercase bg-secondary text-white text-lg font-bold w-full py-2 rounded-sm mt-4 hover:bg-[#172766] transition"
      >
        {loading ? (
          <span className="flex items-center gap-1 justify-center">
            <BiLoaderCircle color="white" className="animate-spin" size={22} />
            Đang xử lý ...
          </span>
        ) : (
          "Gửi yêu cầu ngay"
        )}
      </button>

      {showPopup && (
        <FooterResultPopup
          closeModalHandler={closeModalHandler}
          status={status}
        />
      )}
    </form>
  );
};

export default FooterForm;
