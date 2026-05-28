import express, { Router } from "express";
import { BD } from "../../../db.js";
import jwt from 'jsonwebtoken';
import { autenticarToken } from "../middlewares/autenticacao.js"

const router = Router();
const SECRET_KEY = "sua_chave_secreta"

//Informações do Dashboard

//Transações por Categorias
router.get('/dashboard', async (req, res) => {
    try {

        //Resumo do Mês
        const selecaoResumoMes = `
    SELECT 
        SUM(s.preco) AS faturamento_total,
        SUM(CASE WHEN a.status = 'confirmado' THEN s.preco ELSE 0 END) AS confirmados,
        SUM(CASE WHEN a.status = 'cancelado' THEN s.preco ELSE 0 END) AS cancelados
    FROM agendamentos a
    INNER JOIN servicos s ON a.id_servico = s.id_servico
    WHERE DATE_TRUNC('month', a.data_hora) = DATE_TRUNC('month', CURRENT_DATE)
    `

        // Serviços mais procurados do mês
        const selecaoServicosMaisProcurados = `
    SELECT 
        s.nome AS servico,
        COUNT(a.id_agendamento) AS quantidade
    FROM agendamentos a
    INNER JOIN servicos s ON a.id_servico = s.id_servico
    WHERE DATE_TRUNC('month', a.data_hora) = DATE_TRUNC('month', CURRENT_DATE)
    GROUP BY s.id_servico, s.nome
    ORDER BY quantidade DESC
    LIMIT 5
`

        // Proximos agendamentos
        const selecaoProximosAgendamentos = `
    SELECT 
        u.nome AS cliente,
        s.nome AS servico,
        TO_CHAR(a.data_hora, 'DD/MM/YYYY HH24:MI') AS data_hora,
        a.status
    FROM agendamentos a
    INNER JOIN usuarios u ON a.id_cliente = u.id_usuario
    INNER JOIN servicos s ON a.id_servico = s.id_servico
    WHERE a.data_hora >= NOW()
    ORDER BY a.data_hora ASC
    LIMIT 5
        `

        // Fidelidade dos clientes
        const selecaoFidelidadeClientes = `
    SELECT 
        u.nome AS cliente,
        COUNT(a.id_agendamento) AS visitas,
        SUM(s.preco) AS total_gasto
    FROM agendamentos a
    INNER JOIN usuarios u ON a.id_cliente = u.id_usuario
    INNER JOIN servicos s ON a.id_servico = s.id_servico
    WHERE a.status = 'confirmado'
    GROUP BY u.id_usuario, u.nome
    ORDER BY visitas DESC
    LIMIT 10
        `

        const resResumoMes = await BD.query(selecaoResumoMes);
        const resServicosMaisProcurados = await BD.query(selecaoServicosMaisProcurados);
        const resProximosAgendamentos = await BD.query(selecaoProximosAgendamentos);
        const resFidelidadeClientes = await BD.query(selecaoFidelidadeClientes);
        
        const dadosDashboard = {
            resumoMes: resResumoMes.rows[0],
            resumoServicosMaisProcurados: resServicosMaisProcurados.rows,
            resumoProximosAgendamentos: resProximosAgendamentos.rows,
            resumoFidelidadeClientes: resFidelidadeClientes.rows
         };

        return res.status(200).json(dadosDashboard);

    } catch (error) {
        console.error('Erro ao buscar transações por categoria', error.message);
        return res.status(500).json({ error: 'Erro ao buscar transações por categoria' });
    }
});

export default router;