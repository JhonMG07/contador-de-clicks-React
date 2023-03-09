import React from "react";
import "../stylesheet/contador.css"
function contador({numeroClic}){
   
    return(
        <div className="contador">
            {numeroClic}
        </div>
    );
}

export default contador;