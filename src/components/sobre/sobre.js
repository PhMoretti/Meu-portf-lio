import './sobre.css'
import React from "react";
import imgjs from './img/imgjs.png';
import Tecnologia from '../tecnologia/tecnologia';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import sql from './img/sql.png';
import sqlserver from './img/sql-server.png';
import azure from './img/azure.png';
import aws from './img/aws.png';
import mysql from './img/mysql.png';

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
                    <div className='fundo_tecnologia'>
                        <div className='tecnologia_flex'>
                            <Tecnologia nometecnologia='CSS' imgnome={css}></Tecnologia>
                            <Tecnologia nometecnologia='JS' imgnome={js}></Tecnologia>
                            <Tecnologia nometecnologia='REACT JS' imgnome={react}></Tecnologia>
                        </div>
                        <div className='tecnologia_flex'>
                            <Tecnologia nometecnologia='NODE JS' imgnome={nodejs}></Tecnologia>
                            <Tecnologia nometecnologia='SQL' imgnome={sql}></Tecnologia>
                            <Tecnologia nometecnologia='SQL SERVER' imgnome={sqlserver}></Tecnologia>
                        </div>
                        <div className='tecnologia_flex'>
                            <Tecnologia nometecnologia='AZURE' imgnome={azure}></Tecnologia>
                            <Tecnologia nometecnologia='AWS' imgnome={aws}></Tecnologia>
                            <Tecnologia nometecnologia='MYSQL' imgnome={mysql}></Tecnologia>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;

