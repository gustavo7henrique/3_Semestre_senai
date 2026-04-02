import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/categorias', async (req, res) => {
    try {
        const query = `SELECT * FROM categorias WHERE ativo = true ORDER BY id_categoria `;

        //Cria uma variável para receber o retorno do SQL
        const categorias = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(categorias.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR CATEGORIA ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR CATEGORIA ❌' })
    }
});

//endpoint seguro contra sql injection
router.post('/categorias', async (req, res) => {

    const { nome, descricao, tipo, cor, icone, ativo } = req.body;

    try {
        const comando = `INSERT INTO categorias(nome, descricao, tipo, cor, icone, ativo) VALUES($1, $2, $3, $4, $5, $6)`;
        const valores = [nome, descricao, tipo, cor, icone, ativo];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Categoria cadastrada');
    } catch (error) {
        console.error('Erro ao cadastrar categoria', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar categoria' });
    }
});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/categorias/:id_categoria', async (req, res) => {

    //Id recebido via parametro 
    const { id_categoria } = req.params;
    //Dados do Usuario via corpo da pagina
    const { nome, descricao, tipo, cor, icone, ativo } = req.body

    try {
        //Verificar se o usuario existe
        const verificarCategoria = await BD.query(`SELECT * FROM categorias WHERE id_categoria = $1`, [id_categoria]);
        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Categoria não encontrada' })
        }

        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE categorias SET nome = $1, descricao = $2, tipo = $3, cor = $4, icone = $5, ativo = $6 WHERE id_categoria = $7`;
        const valores = [nome, descricao, tipo, cor, icone, ativo, id_categoria];
        await BD.query(comando, valores);

        return res.status(200).json('Categoria atualizada com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar categoria');
        return res.status(500).json({ error: 'Erro ao atualizar categorias' });
    }
});

//Rota para DELETE -> desativa os usuários
router.delete('/categorias/:id_categoria', async (req, res) => {

    //Id recebido via parametro 
    const { id_categoria } = req.params;

    try {
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1`
        // const comando = `DELETE FROM usuarios WHERE id_usuario = $1`
        await BD.query(comando, [id_categoria]);
        return res.status(200).json({ message: 'Categoria desativada com sucesso' });

    } catch (error) {
        console.error('Erro ao desativar Categoria', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
    }
});



export default router;