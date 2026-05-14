import express, { Router } from "express";
import { BD } from "../../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/servicos', async (req, res) => {
    try {
        const query = `SELECT * FROM servicos ORDER BY id_servico `;

        //Cria uma variável para receber o retorno do SQL
        const servicos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(servicos.rows);
    }
    catch (error) {
        console.error(' Erro ao listar serviços ', error.message);
        res.status(500).json({ error: 'Erro ao listar serviços' })
    }
});

//endpoint seguro contra sql injection
router.post('/servicos', async (req, res) => {

    const { nome, preco, descricao } = req.body;

    try {
        const comando = `INSERT INTO servicos(nome, preco, descricao) VALUES($1, $2, $3)`;
        const valores = [nome, preco, descricao];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Serviço cadastrado');
    } catch (error) {
        console.error('Erro ao cadastrar serviço', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar serviço' });
    }
});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/servicos/:id_servico', async (req, res) => {

    //Id recebido via parametro 
    const { id_servico } = req.params;
    //Dados do Usuario via corpo da pagina
    const { nome, preco, descricao } = req.body

    try {
        //Verificar se o usuario existe
        const verificarServico = await BD.query(`SELECT * FROM servicos WHERE id_servico = $1`, [id_servico]);
        if (verificarServico.rows.length === 0) {
            return res.status(404).json({ message: 'Serviço não encontrado' })
        }

        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE servicos SET nome = $1, preco = $2, descricao = $3 WHERE id_servico = $4`;
        const valores = [nome, preco, descricao, id_servico];
        await BD.query(comando, valores);

        return res.status(200).json('Serviço atualizado com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar serviço');
        return res.status(500).json({ error: 'Erro ao atualizar serviços' });
    }
});

//Rota para DELETE -> desativa os usuários
router.delete('/servicos/:id_servico', async (req, res) => {

    //Id recebido via parametro 
    const { id_servico } = req.params;

    try {
        // const comando = `UPDATE servicos SET ativo = false WHERE id_servico = $1`
        const comando = `DELETE FROM servicos WHERE id_servico = $1`
        await BD.query(comando, [id_servico]);
        return res.status(200).json({ message: 'Serviço excluído com sucesso' });

    } catch (error) {
        console.error('Erro ao excluir serviço', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
    }
});



export default router;