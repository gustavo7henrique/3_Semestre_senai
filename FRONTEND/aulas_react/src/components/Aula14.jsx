import { useState, useEffect } from "react";
import { estilos } from "../styles/Estilos";
import { Link, useNavigate } from "react-router-dom";

const Aula14 = () => {

    const navigate = useNavigate();

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas React</h3>
            <hr />
            <br />
            <h3>Navegação com Links do React Router</h3>
            <br />
            <Link to={'/'} > Página Principal </Link>
            <br />
            <Link to={'/sobre'} > Página Sobre </Link>
            <br />
            <Link to={'/sesisenai'} > Página NotFound </Link>
            <br />
            <br />

            <h3>Navegação com programação utilizando o useNavigate</h3>
            <br />
            <button onClick={() => navigate('/sobre')}>Sobre</button>

            <br />
            <hr />
            <br />
            <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate('/perfil/Gustavo')}>Perfil do Gustavo Henrique </button>
            <br />

            <br />
            <hr />
            <br />
            <h3>Exercícios</h3>
            <br />

            <p>Exercício 1</p>
            <Link to={'/inicio'} > Página Início </Link>
            <br />
            <br />
            <p>Exercício 2</p>
            <button onClick={() => navigate('/filme/1')}>Ver detalhes do Filme</button>

        </div>
    )
};

export default Aula14;
