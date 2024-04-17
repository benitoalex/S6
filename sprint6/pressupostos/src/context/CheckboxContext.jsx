import { createContext, useContext } from "react";

const CheckboxContext = createContext([]);

export const useCheckbox = () => {
  return useContext(CheckboxContext);
};

export default CheckboxContext;
