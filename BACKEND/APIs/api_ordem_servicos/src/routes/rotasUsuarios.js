import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`;

        //Cria uma variável para receber o retorno do SQL
        const usuarios = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(usuarios.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR USUÁRIOS ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR USUÁRIOS ❌' })
    }
});

// //Criando o endpoint para listar todos os usuários
// //O endpoint com parametrosdiretos no comando sql, permite o sql injection
// router.post('/usuarios', async (req, res) => {
//     try {
//         const nome = req.body.nome;
//         const email = req.body.email;
//         const senha = req.body.senha;

//         const comando = `INSERT INTO teste(nome, email, senha) 
//         VALUES('${nome}', '${email}', '${senha}') `

//         console.log(comando);
//         await BD.query(comando);
//         res.status(201).json('Usuário cadastrado');
//     } catch (error) {
//         console.error('Erro ao cadastrado usuarios', error.message);
//         res.status(500).json({ error: 'Erro ao cadastrar usuarios' });
//     }

// });

//endpoint seguro contra sql injection
router.post('/usuarios', async (req, res) => {

    const { nome, email, senha } = req.body;

    try {
        const comando = `INSERT INTO usuarios(nome, email, senha) VALUES($1, $2, $3)`;
        const valores = [nome, email, senha];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Usuário cadastrado');
    } catch (error) {
        console.error('Erro ao cadastrado usuarios', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuarios' });
    }
});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario', async (req, res) => {
    //Id recebido via parametro 
    const { id_usuario } = req.params;

    //Dados do Usuario via corpo da pagina
    const { nome, email, senha } = req.body

    try {
        //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Usuário atualizado com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar usuário');
        return res.status(500).json({ error: 'Erro ao atualizar usuarios' });
    }
});

export default router;