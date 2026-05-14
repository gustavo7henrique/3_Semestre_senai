import jwt from 'jsonwebtoken';

//Assinatura do meu servidor, só o servidor tem essa chave
const SECRET_KEY = 'minha chave secreta';

export function autenticarToken(req, res, next) {
    const cabecalho = req.headers['authorization'];

    //Extarir o token, que por padrão é enviado no formato BEARER
    //bearer ihsifokijdosjido

    const token = cabecalho && cabecalho.split(' ')[1];

    //validação se o token está autorizado
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    //Caso o token seja valido e se a assinatura for igual a secret_key, ele permite o acesso.
    jwt.verify(token, SECRET_KEY, (error, usuario) => {
        //Token é valido ous e expirou
        if (error) {
            return res.status(403).json({ message: 'Token inválido ou expirado' });
        }

        req.usuario = usuario;
        //Passa para a próxima função ou rota
        next();
    })

}