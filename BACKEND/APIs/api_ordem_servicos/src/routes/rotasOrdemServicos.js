import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/ordem-servicos', async (req, res) => {
    try{
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`;

        //Cria uma variável para receber o retorno do SQL
        const ordemServicos = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(ordemServicos.rows);
    }
    catch(error){
        console.error(' ❌ ERRO AO LISTAR ORDEM SERVIÇOS ❌ ', error.message);
        res.status(500).json({error: '❌ ERRO AO LISTAR ORDEM SERVIÇOS ❌'})
    }
});

export default router;