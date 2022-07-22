import React from "react";
import './projeto.css';
import f1 from './img/f1.png';
import tvac from './img/tvac.png';
import loading from './img/loading.png';
import Projetobox from './projeto-box'

const Projeto = () => {
    return(
        <div className="projeto">
            <div className="container">
                <h2 className="projeto_titulo">Projetos onde participei:</h2>
                <h4 className="projeto_subtitulo">Clique nas imagens para saber mais</h4>
                <div className="projeto_cont">
                    <div className="projeto_box">
                        <Projetobox img={f1} texto="Projeto tematizado. Site desenvolvido por mim (full-stack), que conta com informações sobre F1, sistema de login e sistema de votação de um piloto preferido."></Projetobox>
                    </div>
                    <div className="projeto_box">
                        <Projetobox img={tvac} texto="Projeto feito utilizando metodologia ágil com um grupo acadêmico. Sistema de login e monitoramento de temperatura estão operantes dentro do site."></Projetobox>       
                    </div>
                    <div className="projeto_box">
                            <img src={loading} className="loading_img"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projeto;