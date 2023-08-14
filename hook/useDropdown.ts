import { useState } from "react";
import { useOuterClick } from "./useOuterClick";

export default function useDropdown() {
  const [show, setShow] = useState(false);
  const innerRef = useOuterClick(() => setShow(false));

  return { show, setShow, innerRef };
}
