import React from "react";
import useCheckbox from "../hooks/useCheckbox.jsx";

export default function Cards() {
  const checkboxData = useCheckbox();

  return (
    <header>
        <div>
            <h1>
                Aconsegueix la millor qualitat
            </h1>
        </div>
      {checkboxData.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h1>{item.price}</h1>
          <label>
            <input type="checkbox" id={`cbox${index}`} value={item.checkbox} /> Afegir
          </label>
        </div>
      ))}
      <div>
        
      </div>
    </header>
  );
}
