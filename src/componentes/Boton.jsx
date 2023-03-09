import React from "react";
import "../stylesheet/boton.css";
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {/*funcion para manejar los clics */}
      {texto}
    </button>
  );
}
export default Boton;
