import React from 'react';
import Banner from './components/banner/banner'
import Sobre from './components/sobre/sobre'
import Projeto from './components/projetos/projeto'

function App() {
    return(
        <div>
            <Banner></Banner>
            <Sobre></Sobre>
            <Projeto></Projeto>
        </div>
    );
}

export default App;