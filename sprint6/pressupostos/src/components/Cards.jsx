import React, { useState, useEffect } from "react";
import useCheckbox from "../hooks/useCheckbox";
import './Cards.css'

function WebPageCalculator({ isVisible, setCostTotal, checkboxData }) {
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  const handleNumPagesChange = (event) => {
    setNumPages(parseInt(event.target.value));
  };

  const handleNumLanguagesChange = (event) => {
    setNumLanguages(parseInt(event.target.value));
  };

  useEffect(() => {
    calcularPressupost();
  }, [numPages, numLanguages, isVisible, checkboxData]);

  const calcularPressupost = () => {
    const totalPrice = checkboxData.reduce((total, item) => {
      if (item.checkbox) {
        return total + item.price;
      }
      return total;
    }, 0);
    const total = (numPages + numLanguages) * 30;
    setCostTotal(totalPrice + total);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="web-page-calculator-content">
      <label htmlFor="numPages">Nombre de pàgines:</label>
      <input type="number" id="numPages" min="1" value={numPages} onChange={handleNumPagesChange} /><br />
      <label htmlFor="numLanguages">Nombre d'idiomes:</label>
      <input type="number" id="numLanguages" min="1" value={numLanguages} onChange={handleNumLanguagesChange} /><br />
    </div>
  );
}


export default function Cards({ handleCheckboxChange, setWebPageCalculatorTotal }) {
  const checkboxData = useCheckbox();
  const [webCheckboxChecked, setWebCheckboxChecked] = useState([]);
  const [costTotal, setCostTotal] = useState(0);

  const handleWebCheckboxChange = (index) => {
    const isChecked = webCheckboxChecked.includes(index);
    if (isChecked) {
      const updatedChecked = webCheckboxChecked.filter((item) => item !== index);
      setWebCheckboxChecked(updatedChecked);
    } else {
      setWebCheckboxChecked([...webCheckboxChecked, index]);
    }
    handleCheckboxChange(index);
  };
  useEffect(() => {
    let totalPrice = 0;
    checkboxData.forEach((item, index) => {
      if (webCheckboxChecked.includes(index)) {
        totalPrice += item.price;
      }
    });

    setCostTotal(totalPrice);
  }, [webCheckboxChecked, checkboxData]);

  return (
    <article className="container">
      <header>
        <div className="title-container">
          <h1 className="title">Aconsegueix la millor qualitat</h1>
        </div>
        <div className="card-container">

        {checkboxData.map((item, index) => (
  <div key={index} className="card">
    <div className="card-content">
      <div className="card-info">
        <h2 className="card-tecnology">{item.title}</h2>
        <p className="card-description">{item.description}</p>
        <div className="card-actions">
        <h3 className="card-price">{item.price} €</h3>
        <div className="card-checkbox">
          <input
            type="checkbox"
            id={`cbox${index}`}
            checked={webCheckboxChecked.includes(index)}
            onChange={() => handleWebCheckboxChange(index)}
          />
          <label htmlFor={`cbox${index}`}>Afegir</label>
        </div>
      </div>
      </div>
      
    </div>
    {/* Renderiza WebPageCalculator solo si el título es "Web" y el checkbox está marcado */}
    <div className="pag-lang">
      {item.title === "Web" && item.checkbox && (
        <div className="web-page-calculator-container">
          <div className="web-page-calculator-content">
            <WebPageCalculator
              isVisible={item.title === "Web" && item.checkbox}
              costTotal={webCheckboxChecked.length > 0 ? costTotal : 0}
              setCostTotal={setCostTotal}
              setWebPageCalculatorTotal={setWebPageCalculatorTotal}
              checkboxData={checkboxData}
            />
          </div>
        </div>
      )}
    </div>
  </div>
))}

  <div className="total-price">
            <h3>Preu pressupostat: {costTotal}€</h3>
          </div>
        </div>
      </header>
    </article>
  );
}
