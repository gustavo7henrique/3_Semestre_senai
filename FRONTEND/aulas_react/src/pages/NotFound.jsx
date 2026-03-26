import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Página Não Encontrada</h1>
            <Link to='/'>Voltar para Principal</Link>
        </div>
    )
};

export default NotFound;
