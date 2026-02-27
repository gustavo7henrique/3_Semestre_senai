import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try{
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`;

        //Cria uma variável para receber o retorno do SQL
        const usuarios = await BD.query(query);

        //Retorno para a pagina, o json com os dados buscados do SQL
        res.status(200).json(usuarios.rows);
    }
    catch(error){
        console.error(' ❌ ERRO AO LISTAR USUÁRIOS ❌ ', error.message);
        res.status(500).json({error: '❌ ERRO AO LISTAR USUÁRIOS ❌'})
    }
});

export default router;