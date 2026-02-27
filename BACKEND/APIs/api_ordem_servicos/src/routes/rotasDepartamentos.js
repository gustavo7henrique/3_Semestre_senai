import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/departamentos', async (req, res) => {
    try{
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`;

        //Cria uma variável para receber o retorno do SQL
        const departamentos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(departamentos.rows);
    }
    catch(error){
        console.error(' ❌ ERRO AO LISTAR DEPARTAMENTOS ❌ ', error.message);
        res.status(500).json({error: '❌ ERRO AO LISTAR DEPARTAMENTOS ❌'})
    }
});

export default router;