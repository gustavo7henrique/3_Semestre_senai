import { Link, useParams } from "react-router-dom";

const Filme = () => {

    const { id_filme } = useParams();

    return (
        <div>
            <h1>Dados do filme de Id: {id_filme}</h1>
            <br />
            <img src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/16/34/20384584.jpg"/>
            <br />
            <p><b>Nome Filme: </b>E.T</p>
            <br />
            <p><b>Ano Lançamento: </b>1982</p>
            <br />
            <p><b>Gênero: </b>Sci-Fi</p>
            <br />
            <Link to='/'>Voltar para Principal</Link>
        </div>
    )
};

export default Filme;
