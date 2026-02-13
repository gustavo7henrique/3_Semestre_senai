
const Aula03_Login = () => {
    return(
        <div style={estilos.loginConteudo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logoSenai" style={estilos.logoSenai} />
                <h2>Login</h2>
                <div style={estilos.campo}>
                    <label style={estilos.label}>Email</label>
                    <input type="email" placeholder='Email' style={estilos.input}/>
                </div>
                <div style={estilos.campo}>
                    <label style={estilos.label}>Senha</label>
                    <input type="password" placeholder='Senha' style={estilos.input}/>
                </div>
                <div>
                    <button style={estilos.botao}> Entrar </button>
                </div>
        </div>
    )
}




/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '300px',
        margin: '10px auto',
        borderRadius: '8px',
        padding: '20px',
        fontFamily: 'sans-serif',
        flexDirection: 'column',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        gap: '5px'
    },
    logoSenai: {
        width: '200px'
    },
    campo:{
        width: '100%'
    },
    label: {
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '4px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    botao: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '4px',
        width: '100%', 
        // height: '100%',
        border: 'none',
        padding: '10px',
        fontWeight: 'bold'
    }
}


export default Aula03_Login;