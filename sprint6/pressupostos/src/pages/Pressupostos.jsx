import React, { useState, useMemo } from "react";
import CheckboxContext from "../context/CheckboxContext.jsx";
import Cards from "../components/Cards.jsx";
import { navigate } from '../Link.jsx'

export default function Pressupostos() {
    const [checkboxData, setCheckboxData] = useState([
      {
        title: "Seo",
        description: "Programaciò d'una web responsive completa",
        price: 300,
        checkbox: false,
      },
      {
        title: "Ads",
        description: "Programació d'una web responsive completa",
        price: 400,
        checkbox: false,
      },
      {
        title: "Web",
        description: "Programació d'una web responsive completa",
        price: 500,
        checkbox: false,
      }
    ]);
  
    const [costTotal, setCostTotal] = useState(0);
    const [webPageCalculatorTotal, setWebPageCalculatorTotal] = useState(0); // Nuevo estado para el costo total de WebPageCalculator
  
    const handleCheckboxChange = (index) => {
      const newData = [...checkboxData];
      newData[index].checkbox = !newData[index].checkbox;
      setCheckboxData(newData);
    };
  
    return (
      <CheckboxContext.Provider value={checkboxData}>
        <div className='App'>
          <Cards
            handleCheckboxChange={handleCheckboxChange}
            costTotal={costTotal}
            setCostTotal={setCostTotal}
            setWebPageCalculatorTotal={setWebPageCalculatorTotal}
          />
        </div>
        <button onClick={() => navigate('/')}>Benvinguts</button>
      </CheckboxContext.Provider>
    );
  }