import React from "react";

const MostrarNumero = (props) => {
    return (
        <div className="texto">
            <p>The number is: {props.match.params.texto}</p>
        </div>
    )
}

export default MostrarNumero;