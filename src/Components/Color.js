import React from "react";

const Color = (props) => {
    return (
        <div style={{backgroundColor:props.match.params.color2}} className="texto">
            <p style={{color:props.match.params.color1}}>The word is: <span>{props.match.params.texto}</span></p>
        </div>
    )
}

export default Color;