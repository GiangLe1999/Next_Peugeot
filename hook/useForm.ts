import { FormEvent, FormEventHandler, useState } from "react";

export function useForm(
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carType, setCarType] = useState("2008");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [status, setStatus] = useState("");

  const closeModalHandler = () => {
    setShowPopup(false);
    setShowResult(false);
    setStatus("");
    setLoading(false);
  };

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent
  ) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = JSON.stringify({ name, phone, carType });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`,
        {
          method: "POST",
          body: data,
        }
      );
      setLoading(false);
      setShowPopup(false);

      if (res.status === 201) {
        setShowPopup(true);
        setShowResult(true);
        setStatus("success");
        setName("");
        setPhone("");
        setCarType("");
      } else {
        throw new Error();
      }
    } catch (error) {
      setLoading(false);
      setShowPopup(true);
      setShowResult(true);
      setStatus("error");
      setName("");
      setPhone("");
      setCarType("");
    }
  };

  return {
    name,
    setName,
    phone,
    setPhone,
    carType,
    setCarType,
    loading,
    setLoading,
    showResult,
    setShowResult,
    status,
    setStatus,
    closeModalHandler,
    formSubmitHandler,
  };
}
