import React from "react";
import useCheckbox from "../hooks/useCheckbox";
import './Cards.css'

export default function Cards({ handleCheckboxChange }) {
  const checkboxData = useCheckbox();

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
                <h2 className="card-tecnology">{item.title}</h2>
                <p className="card-description">{item.description}</p>
              </div>
              <h3 className="card-price">{item.price} €</h3>
              <div className="card-checkbox">
                <input
                  type="checkbox"
                  id={`cbox${index}`}
                  checked={item.checkbox}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`cbox${index}`}>Afegir</label>
              </div>
            </div>
          ))}
        </div>
      </header>
    </article>

  );
}
