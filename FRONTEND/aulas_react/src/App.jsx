import Cabecalho from "./components/Cabecalho";
import {estilos} from './styles/Estilos';

import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import Aula04 from "./components/Aula04";
import Aula05 from "./components/Aula05";
import Aula06 from "./components/Aula06";
import Aula07 from "./components/Aula07";
import Aula08 from "./components/Aula08";
import Aula09 from "./components/Aula09";


const App = () => {
  return (
    <div style={estilos.fundo}>
     <Cabecalho aula='React'/>
     <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          {/* Aqui incluiremos todos o scomponentes de Aula */}
          <Aula01/>
          <Aula02/>
          <Aula03/>
          <Aula04/>
          <Aula05/>
          <Aula06/>
          <Aula07/>
          <Aula08/>
          <Aula09/>
        </div>
     </main>
    </div>
  )
}

export default App;
