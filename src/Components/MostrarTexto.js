import React from "react";

const MostrarTexto = (props) => {
    return (
        <div className="texto">
            <p>The word is: <span>{props.match.params.texto}</span></p>
        </div>
    )
}

export default MostrarTexto;