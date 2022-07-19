import './sobre.css'
import React from "react";
import imgjs from './imgjs.png'

const Sobre = () => {
    return(
        <div className='sobre'>
            <div className='container'>
                <div className='sobre_cont'>
                    <div className='sobre_titulo'>
                        <h2>Conheça-me abaixo.</h2>
                        <div className='fora_bola'>
                            <div className='bola'></div>
                        </div>    
                    </div>
                    <div className='sobre_json'>
                        <img src={imgjs} className='img_json'></img>
                    </div>
                    <div className='sobre_texto'>
                        <p>Olá! Meu nome é Pedro Henrique Moretti Pinsan de Oliveira Silva. Sou um programador em início de carreira e espero adquirir muitos conhecimentos ao longo de minha jornada. Para tal, por exemplo, desenvolvi este website utilizando <i>HTML</i>, <i>CSS</i>, <i>JS</i> e <i>REACT JS</i> para poder expor toda minha trajetória e tecnologias dominadas a quem seja necessário. Logo abaixo, seguem as tecnologias nas quais possuo conhecimento:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;

