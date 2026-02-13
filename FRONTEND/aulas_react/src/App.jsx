import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import Aula04 from "./components/Aula04";
import Aula05 from "./components/Aula05";
import Cabecalho from "./components/Cabecalho";
import {estilos} from './styles/Estilos';
// import {estilos} from './styles/Aula03_Login_Estilos';

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
        </div>
     </main>
    </div>
  )
}

export default App;
