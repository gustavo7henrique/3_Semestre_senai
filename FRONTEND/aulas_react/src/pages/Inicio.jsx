import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div>
            <h1>Seja Bem-Vindo</h1>
            <Link to='/detalhes'>Veja os Detalhes</Link>
            <br />
            <Link to='/'>Volte para A Principal</Link>
        </div>
    )
};

export default Inicio;
