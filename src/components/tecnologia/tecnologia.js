import React from 'react';
import './tecnologia.css';
import css from './css.png';
import azure from './azure.png';

const Tecnologia = (props) => {
    return(
        <div className='tecnologia'>
            <img src={props.imgnome} className='img_dev'></img>            
            <h4>{props.nometecnologia}</h4>
        </div>
    )
}

export default Tecnologia;