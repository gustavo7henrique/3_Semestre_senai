import express from "express";
import jogadorController from "../controllers/jogadorController.js";

const router = express.Router();

//Rota para Listar os jogadores
router.get('/jogadores', jogadorController.listar);

//Rota para Adicionar jogadores
router.post('/jogadores', jogadorController.adicionar);

// //Rota para add pnts
router.post('/jogadores/adicionar-pontos', jogadorController.adicionarPontos);

export default router;