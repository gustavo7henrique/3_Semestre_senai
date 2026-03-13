import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/ordem-servicos', async (req, res) => {
    try {
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`;

        //Cria uma variável para receber o retorno do SQL
        const ordemServicos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        // res.status(200).json(ordemServicos.rows);
        res.status(200).json(ordemServicos.rows.map(ordem => ({...ordem, data: ordem.data.toISOString().split("T")[0]}))
);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR ORDEM SERVIÇOS ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR ORDEM SERVIÇOS ❌' })
    }
});

//endpoint seguro contra sql injection
router.post('/ordem-servicos', async (req, res) => {

    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    try {
        const comando = `INSERT INTO ordem_servicos (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) 
            VALUES($1, $2, $3, $4, $5, $6, $7, $8) `;
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento];

      await BD.query(comando, valores);
        console.log(comando, valores);

       

        res.status(201).json('Ordem de Serviço cadastrada');
    } catch (error) {
        console.error('Erro ao cadastrar ordem de serviços', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar ordem de serviços' });
    }

});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/ordem-servicos/:id_ordem', async (req, res) => {
    //Id recebido via parametro 
    const { id_ordem } = req.params;

    //Dados do Usuario via corpo da pagina
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento} = req.body

    try {
        //Verificar se o ordem existe
        const verificarOrdem = await BD.query(`SELECT * FROM ordem_servicos WHERE id_ordem = $1`, [id_ordem]);
        if (verificarOrdem.rows.length === 0) {
            return res.status(404).json({ message: 'Ordem de Serviço não encontrada' })
        }
        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE ordem_servicos SET numero_ordem = $1, titulo = $2, descricao = $3, prioridade = $4, 
        status = $5, data = $6, id_usuario = $7, id_departamento = $8 WHERE id_ordem = $9`;
        const valores = [ numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento, id_ordem];
        await BD.query(comando, valores);

        return res.status(200).json('Ordem de Serviço atualizada com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar Ordem de Serviço');
        return res.status(500).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
});


export default router;