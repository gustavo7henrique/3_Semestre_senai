import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { enderecoServidor } from '../utils'
import logo from '../assets/foi.png'
import { EstilosLogin } from '../styles/EstilosLogin'

import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md'

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('beltrano@email.com');
    const [senha, setSenha] = useState('2027');
    const [mensagem, setMensagem] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    async function botaoEntrar(event) {
        event.preventDefault()
        try {
            if (email == '' || senha == '') {
                setMensagem('Preencha todos os campos')
                return
            }

            const dadosLogin = {
                "email": email,
                "senha": senha
            }

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
            })
            if (resposta.status == 404) {
                setMensagem(`Rota não encontrada: ${resposta.url}`)
                return
            }
            const dados = await resposta.json();

            if (resposta.status == 500) {
                setMensagem(dados.message)
                return
            }

            if (resposta.ok) {
                localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
                navigate('/principal')
            }
            else {
                setMensagem('Email ou senha incoretos')
            }

        } catch (erro) {
            setMensagem(`Erro ao realizar login ${erro.message}`)
        }
    }

    const alternarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha)
    }

    return (
        <div style={EstilosLogin.container}>

            <header style={EstilosLogin.cabecalho}>
                <img src={logo} style={EstilosLogin.iconeLogo} />
                <div>
                    <h1 style={EstilosLogin.nomeApp} >FinanControl</h1>
                    <p style={EstilosLogin.subtituloApp} >O seu controle financeiro</p>
                </div>
            </header>

            <main style={EstilosLogin.conteudoPrincipal}>
                <form style={EstilosLogin.formularioLogin}>
                    <h2 style={EstilosLogin.titulo}>Acesse sua conta</h2>

                    <div style={EstilosLogin.grupoInput}>
                        <MdEmail style={EstilosLogin.iconeInput} />
                        <input type="email" style={EstilosLogin.input}
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={EstilosLogin.grupoInput}>
                        <MdLock style={EstilosLogin.iconeInput} />
                        <input type={mostrarSenha ? "text" : "password"} style={EstilosLogin.input}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button type="button" onClick={alternarVisibilidadeSenha}
                            style={EstilosLogin.alternarVisibilidade}
                        >
                            {mostrarSenha == true ? <MdVisibility /> : <MdVisibilityOff />}
                        </button>
                    </div>

                    <div style={EstilosLogin.entreOpcoes}>
                        <div style={EstilosLogin.containerCheckbox}>
                            <input type="checkbox" style={EstilosLogin.checkbox} />
                            <label>Lembrar-Me</label>
                        </div>
                        <a href="#" style={EstilosLogin.esqueceuSenha}>Esqueci a senha</a>
                    </div>

                    <button type="submit" style={EstilosLogin.botaoEntrar} onClick={botaoEntrar}>
                        Entrar
                    </button>

                    <p style={EstilosLogin.mensagemFeedback}>{mensagem}</p>

                </form>
            </main>

        </div>
    );
};