import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Informações do Dashboard

//Transações por Categorias
router.get('/dashboard/categorias', async (req, res) => {
    try {
        const comando = `
            SELECT c.nome, SUM(t.valor) AS total 
            FROM transacoes t 
            INNER JOIN categorias c ON t.id_categoria = c.id_categoria
            WHERE t.tipo = 'S'
            GROUP BY c.nome
            ORDER BY total DESC
        `
        const resultado = await BD.query(comando);
        return res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao buscar transações por categoria', error.message);
        return res.status(500).json({ error: 'Erro ao buscar transações por categoria' });
    }
});

//Transações por subCategorias
router.get('/dashboard/subcategorias', async (req, res) => {
    try {
        const comando = `
            SELECT s.nome, SUM(t.valor) AS total 
            FROM transacoes t 
            INNER JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
            WHERE t.tipo = 'S'
            GROUP BY s.nome
            ORDER BY total DESC
        `
        const resultado = await BD.query(comando);
        return res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao buscar transações por subcategoria', error.message);
        return res.status(500).json({ error: 'Erro ao buscar transações por subcategoria' });
    }
});

router.get('/dashboard/maiores-gastos', async (req, res) => {
    try {
        const comando = `
            SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY') AS data_registro
            FROM transacoes
            WHERE tipo = 'S'
            ORDER BY valor DESC
            LIMIT 5
        `
        const resultado = await BD.query(comando);
        return res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao buscar transações por maiores gastos', error.message);
        return res.status(500).json({ error: 'Erro ao buscar transações por maiores gastos' });
    }
});




export default router;