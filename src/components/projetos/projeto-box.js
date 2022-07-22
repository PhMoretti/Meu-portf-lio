import React from "react";
import './projeto.css';

const Projetobox = (props) => {
    return(
    <div className="projetobox">
        <img src={props.img} className="img_projeto"></img>
        <p className="texto_projeto">{props.texto}</p>
    </div>
    );
}

export default Projetobox;