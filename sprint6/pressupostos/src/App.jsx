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

  return (
    <CheckboxContext.Provider value={checkboxData}>
      <div className='App'>
        <Cards handleCheckboxChange={handleCheckboxChange}  />
        <h2 className="total-price">Preu pressupostat:{totalPrice} €</h2>
      </div>
    </CheckboxContext.Provider>
  );
}

export default App;
