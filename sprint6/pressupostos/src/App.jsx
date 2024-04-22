import React, { useState, useMemo } from "react";
import CheckboxContext from "./context/CheckboxContext.jsx";
import Cards from "./components/Cards.jsx";
import './App.css'

function App() {
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

  const totalPrice = useMemo(() => {
    return checkboxData.reduce((total, item) => {
      if (item.checkbox) {
        return total + item.price;
      }
      return total;
    }, 0);
  }, [checkboxData]);

  // Sumamos totalPrice y costTotal para obtener el costo total combinado
  const combinedTotal = totalPrice + costTotal + webPageCalculatorTotal;

  return (
    <CheckboxContext.Provider value={checkboxData}>
      <div className='App'>
        {/* Pasamos costTotal y handleCostTotalChange como props al componente Cards */}
        <Cards 
          handleCheckboxChange={handleCheckboxChange} 
          costTotal={costTotal} 
          setCostTotal={setCostTotal} 
          setWebPageCalculatorTotal={setWebPageCalculatorTotal} // Pasamos setWebPageCalculatorTotal como prop
        />
        <h2 className="total-price">Preu pressupostat: {combinedTotal} €</h2>
      </div>
    </CheckboxContext.Provider>
  );
}

export default App;
