import { useState, useEffect } from "react";
import { estilos } from "../styles/Estilos"
import Aula15_Login from "./Aula15_Login";

const Aula15 = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const entrar = () => {
        if (email === "senai@senai.br" && senha === "123") {
            setMensagem("Login bem sucedido ✅");
        }
        else { setMensagem("Email ou senha incorretos ❌"); }
    };

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 15 - Login com API</h2>
            <h3>Utilizando o login juntamnete com uma API</h3>
            <hr />
            <br />

            <Aula15_Login/>
                    
        </div>
    )

}

export default Aula15;
