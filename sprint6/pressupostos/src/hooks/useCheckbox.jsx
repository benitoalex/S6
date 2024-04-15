import { useContext } from "react";
import CheckboxContext from "../context/CheckboxContext.jsx";

const useCheckbox = () => {
  const contextValues = useContext(CheckboxContext);
  const checkedItems = contextValues.filter(item => item.checkbox);
  return checkedItems;
}

export default useCheckbox;
