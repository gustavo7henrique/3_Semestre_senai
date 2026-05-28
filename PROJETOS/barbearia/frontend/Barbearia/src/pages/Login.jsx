import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { enderecoServidor } from '../utils'

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function botaoEntrar(event) {
        event.preventDefault()
        try {
            if (email == '' || senha == '') {
                setMensagem('Preencha todos os campos')
                return
            }

            const login = {
                "email": email,
                "senha": senha
            }

            const resposta = await fetch(`${enderecoServidor}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(login)
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

    return (
        <div>

            <h1>Tela de Login</h1>

            <label>Email</label>
            <input type="email" placeholder="Digite seu email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"
                value={senha} onChange={(e) => setSenha(e.target.value)}
            />
            <br />
            <button onClick={botaoEntrar}>Entrar</button>

            <p style={{ color: '#f00' }}>{mensagem}</p>

        </div>
    );
};