import "./App.css";
import imgLogo from "./image/freecodecamp.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/contador";
import { useState } from "react"; /*Usamos hooks para el state */

function App() {
  /*tenemos que crear el estado, vamos a ocupar hooks(componentes funcionales) */

  const [numClics, setNumClics] =
    useState(0); /*Como tal seria [variable,nombreFuncion] */
  /*Se crean los estados y el valor que nos permite actualizarlo. y al final le damos un valor inicial */

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamo-logo-contenedor">
        <img
          className="freecamp-logo"
          src={imgLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numeroClic={numClics} />

        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
        <div className="author">
          Jhon Meza
          </div>
      </div>
    </div>
  );
}

export default App;
