import React, { useState, useEffect } from "react";
import useCheckbox from "../hooks/useCheckbox";
import './Cards.css'

function WebPageCalculator({ isVisible, costTotal, setCostTotal, checkboxData }) {
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  const handleNumPagesChange = (event) => {
    setNumPages(parseInt(event.target.value));
  };

  const handleNumLanguagesChange = (event) => {
    setNumLanguages(parseInt(event.target.value));
  };

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
  


  useEffect(() => {
    console.log("isVisible:", isVisible);
    calcularPressupost();
  }, [numPages, numLanguages, isVisible, checkboxData, setCostTotal]);


  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <label htmlFor="numPages">Nombre de pàgines:</label>
      <input type="number" id="numPages" min="1" value={numPages} onChange={handleNumPagesChange} /><br />
      <label htmlFor="numLanguages">Nombre d'idiomes:</label>
      <input type="number" id="numLanguages" min="1" value={numLanguages} onChange={handleNumLanguagesChange} /><br />
      <div>
        <p>Pressupost total: {costTotal}€</p>
      </div>
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

  return (
    <article className="container">
      <header>
        <div className="title-container">
          <h1 className="title">Aconsegueix la millor qualitat</h1>
        </div>
        <div className="card-container">
          {checkboxData.map((item, index) => {
            console.log("Checkbox item:", item);
            console.log("Index:", index);
            return (
              <div key={index} className="card">
                <div className="card-content">
                  <h2 className="card-tecnology">{item.title}</h2>
                  <p className="card-description">{item.description}</p>
                </div>
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
            )
          })}
          {/* Pasamos setWebPageCalculatorTotal como prop al componente WebPageCalculator */}
          <WebPageCalculator
            isVisible={checkboxData.some(item => item.title === "Web" && item.checkbox)}
            costTotal={webCheckboxChecked.length > 0 ? costTotal : 0}
            setCostTotal={setCostTotal}
            setWebPageCalculatorTotal={setWebPageCalculatorTotal}
            checkboxData={checkboxData} // Pasamos setWebPageCalculatorTotal como prop
          />
        </div>
      </header>
    </article>
  );
}
