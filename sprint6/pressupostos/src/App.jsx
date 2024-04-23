import React, { useState, useEffect } from "react";
import Welcome from './pages/Welcome.jsx'
import Pressupostos  from "./pages/Pressupostos.jsx";
import { EVENTS } from "./const.js";


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === '/' && <Welcome />}
      {currentPath === '/pressupostos' && <Pressupostos />}
    </main>
  );
}



export default App;

