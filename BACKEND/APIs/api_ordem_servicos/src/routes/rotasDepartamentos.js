import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar toddepartamentos
router.get('/departamentos', async (req, res) => {
    try {
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`;

        //Cria uma variável para receber o retorno do SQL
        const departamentos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(departamentos.rows);
    }
    catch (error) {
        console.error(' ❌ ERRO AO LISTAR DEPARTAMENTOS ❌ ', error.message);
        res.status(500).json({ error: '❌ ERRO AO LISTAR DEPARTAMENTOS ❌' })
    }
});

//endpoint seguro contra sql injection
router.post('/departamentos', async (req, res) => {

    const { nome, descricao } = req.body;

    try {
        const comando = `INSERT INTO departamentos(nome, descricao) 
            VALUES($1, $2) `;
        const valores = [nome, descricao];

        await BD.query(comando, valores);
        console.log(comando, valores);

        res.status(201).json('Departamento cadastrado');
    } catch (error) {
        console.error('Erro ao cadastrar departamentos', error.message);
        res.status(500).json({ error: 'Erro ao cadastrar departamentos' });
    }

});

//Endpoint para atualizar um unico usuario recebendo o parametro pelo id e buscando o usuario
router.put('/departamentos/:id_departamento', async (req, res) => {
    //Id recebido via parametro 
    const { id_departamento } = req.params;

    //Dadepartamentoid_departamento via corpo da pagina
    const { nome, descricao } = req.body

    try {
        //Verificar se o departamento existe
        const verificarDepartamento = await BD.query(`SELECT * FROM departamentos WHERE id_departamento = $1`, [id_departamento]);
        if (verificarDepartamento.rows.length === 0) {
            return res.status(404).json({ message: 'Departamento não encontrado' })
        }
        //Atualiza todos os campos da tabela(PUT substituição completa)
        const comando = `UPDATE departamentos SET nome = $1, descricao = $2 WHERE id_departamento = $3`;
        const valores = [nome, descricao, id_departamento];
        await BD.query(comando, valores);

        return res.status(200).json('Departamento atualizado com sucesso')
    }
    catch (error) {
        console.error('Erro ao atualizar departamento');
        return res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
});


export default router;