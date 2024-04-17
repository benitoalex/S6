import { useContext } from "react";
import CheckboxContext from "../context/CheckboxContext";

const useCheckbox = () => {
  const contextValues = useContext(CheckboxContext);
  return contextValues;
}

export default useCheckbox;
