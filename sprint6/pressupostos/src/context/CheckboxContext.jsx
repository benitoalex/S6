import { createContext} from "react";

const CheckboxContext = createContext({
    title: null,
    description: null,
    price: null,
    checkbox: null,
});

export default CheckboxContext;