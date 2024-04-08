import { useState } from "react";
import "./App.css";
import HeaderName from "./Componentes/Header/Index";
import ApresentationTitle from "./Componentes/ApresentationTitle/Index";
import Apresentation from "./Componentes/Apresentation/Index";
import AboutMe from "./Componentes/AboutMe/Index";
import Habilidades from "./Componentes/Cards/Index";
import FooterThanks from "./Componentes/Footer/Index";
import Contatos from "./Componentes/Contatos/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <HeaderName />
        <ApresentationTitle />
        <Apresentation />
        <AboutMe />
        <Habilidades />
        <Contatos />
        <FooterThanks />
      </body>
    </>
  );
}

export default App;
