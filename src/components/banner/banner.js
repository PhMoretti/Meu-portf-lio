import './banner.css';
import React from 'react';

const Banner = () => {
    return(
        <div className="banner">
            <div className="container">
                <div className="banner_cont">
                    <h1 className="nome_banner">Pedro Moretti</h1>
                    <div className="div_animacao">
                        <h2 className="frase_banner">
                            &lt;meuportfolio&gt;<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Programação lógica e calculada, sob sua demanda.&lt;/h1&gt;<br></br>
                            &lt;/meuportfolio&gt;
                        </h2>
                        <div className="barra_banner"></div>
                    </div>
                </div>
            </div>        
        </div>
            );
}

export default Banner;