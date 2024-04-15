import CheckboxContext from './context/CheckboxContext.jsx'
import Cards from './components/Cards.jsx';
import './App.css'
import { useState } from 'react';

 export function App() {
  const [CheckboxData, setCheckboxData] = useState[{
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
  ];
  
  const handleCheckboxChange = (index) => {
    const newData = [...CheckboxData];
    newData[index].checkbox = !newData[index].checkbox;
    setCheckboxData(newData);
  };


  const totalPrice = () => {
    const checkedItems = CheckboxData.filter(item => item.checkbox);
    return checkedItems.reduce((total, item) => total + item.price, 0);
  }
  return (

    <CheckboxContext.Provider value={{CheckboxData, handleCheckboxChange}}>
      <div className='App'>
        <Cards />
        <h2>
            Preu Pressupostat: {totalPrice()} €
        </h2>
      </div>
    </CheckboxContext.Provider>

  )
}

export default App;
