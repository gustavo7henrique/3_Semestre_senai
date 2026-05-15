import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/transacoes', async (req, res) => {
    try {
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, 
            TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
            TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
            TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
            t.tipo, 
            c.nome AS nome_categoria,
            s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria `;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSAÇÕES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSAÇÕES ❌' + error.message })
    }
});

//Listar transações por tipo
router.get('/transacoes/tipo', async (req, res) => {

    //Requisicao a partir de uma query
    const { tipo } = req.query;

    try {
        if (!tipo) {
            return res.status(400).json({ message: 'Informe o tipo de transação' })
        };

        const comando = `SELECT t.id_transacao, t.valor, t.descricao, 
            TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
            TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
            TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
            t.tipo, 
            c.nome AS nome_categoria,
            s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria 
            WHERE t.tipo = $1
            ORDER BY t.data_registro DESC `;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando, [tipo]);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSAÇÕES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSAÇÕES ❌' + error.message })
    }
});

//Listar transações por período
router.get('/transacoes/periodo', async (req, res) => {

    //Requisicao a partir de uma query
    const { inicio, fim } = req.query;

    try {
        if (!inicio || !fim) {
            return res.status(400).json({ message: 'Informe as datas de inicio e fim' })
        }

        const comando = `SELECT t.id_transacao, t.valor, t.descricao, 
            TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
            TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
            TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
            t.tipo, 
            c.nome AS nome_categoria,
            s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria 
            WHERE t.data_registro BETWEEN TO_DATE($1, 'DD/MM/YYYY') AND TO_DATE($2, 'DD/MM/YYYY')
            ORDER BY t.data_registro DESC `;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando, [inicio, fim]);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSAÇÕES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSAÇÕES ❌' + error.message })
    }
});

//Listar transações por id_categoria
router.get('/transacoes/categoria/:id_categoria', async (req, res) => {

    const { id_categoria } = req.params;

    try {
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, 
            TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
            TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
            TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
            t.tipo, 
            c.nome AS nome_categoria,
            s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria 
            WHERE t.id_categoria= $1 
            ORDER BY t.data_registro DESC `;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando, [id_categoria]);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSAÇÕES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSAÇÕES ❌' + error.message })
    }
});

//Listar transações por id_categoria
router.get('/transacoes/subcategoria/:id_subcategoria', async (req, res) => {

    const { id_subcategoria } = req.params;

    try {
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, 
            TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
            TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
            TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
            t.tipo, 
            c.nome AS nome_categoria,
            s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria 
            WHERE t.id_subcategoria= $1 
            ORDER BY t.data_registro DESC `;

        //Cria uma variável para receber o retorno do SQL
        const transacoes = await BD.query(comando, [id_subcategoria]);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(transacoes.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR TRANSAÇÕES ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR TRANSAÇÕES ❌' + error.message })
    }
});

//Listar o valor total de transações
router.get('/transacoes/total', async (req, res) => {

    const { tipo } = req.query; //Pega o tipo E ou S

    try {
        const comando = `SELECT SUM(valor) AS total FROM transacoes WHERE tipo = $1`;

        const resultado = await BD.query(comando, [tipo.toUpperCase()]);

        return res.status(200).json({
            tipo: tipo.toUpperCase(),
            total: resultado.rows[0].total || 0
        });
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao calcular total de transações' + error.message });
    }
});

//endpoint seguro contra sql injection
router.post('/transacoes', async (req, res) => {

    const { valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria } = req.body;

    try {
        const comando = `INSERT INTO transacoes(valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria ) 
            VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;

        const valores = [valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json('Transação cadastrada');
    } catch (error) {
        console.error('Erro ao cadastrar transação', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar transação' });
    }
});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/transacoes/:id_transacao', async (req, res) => {

    //Id recebido via parametro 
    const { id_transacao } = req.params;
    //Dados do Usuario via corpo da pagina
    const { valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria } = req.body

    try {
        //Verificar se o usuario existe
        const verificarTransacao = await BD.query(`SELECT * FROM transacoes WHERE id_transacao = $1`, [id_transacao]);
        if (verificarTransacao.rows.length === 0) {
            return res.status(404).json({ message: 'Transação não encontrada' })
        }

        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE transacoes SET valor = $1, descricao = $2, data_registro = $3, data_pagamento = $4, data_vencimento = $5, tipo = $6, id_categoria = $7, id_subcategoria = $8
        WHERE id_transacao = $9`;
        const valores = [valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria, id_transacao];
        await BD.query(comando, valores);

        return res.status(200).json('Categoria atualizada com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar categoria');
        return res.status(500).json({ error: 'Erro ao atualizar categorias' });
    }
});

//Rota para DELETE -> desativa os usuários
router.delete('/transacoes/:id_transacao', async (req, res) => {

    //Id recebido via parametro 
    const { id_transacao } = req.params;

    try {
        const comando = `DELETE FROM transacoes WHERE id_transacao = $1`
        // const comando = `DELETE FROM usuarios WHERE id_usuario = $1`
        await BD.query(comando, [id_transacao]);
        return res.status(200).json({ message: 'Transação excluida com sucesso' });

    } catch (error) {
        console.error('Erro ao excluir Transação', error.message);
        return res.status(500).json({ message: 'Erro interno no servidor' + error.message });
    }
});


//Informações do Dashboard

// //Transações por categorias
// router.get('dashboard/categorias', async (req, res) => {
//     try {
//         const comando = `
//             SELECT c.nome, SUM(t.valor) AS total 
//             FROM transacoes t 
//             INNER JOIN categorias c ON t.id_categoria = c.id_categoria
//             WHERE t.tipo = 'S'
//             GROUP BY c.nome
//             ORDER BY total DESC
//         `
//         const resultado = await BD.query(comando);
//         return res.status(200).json(resultado.rows);
//     } catch (error) {
//         console.error('Erro ao buscar transações por categoria', error.message);
//         return res.status(500).json({ error: 'Erro ao buscar transações por categoria' });
//     }
// });




export default router;