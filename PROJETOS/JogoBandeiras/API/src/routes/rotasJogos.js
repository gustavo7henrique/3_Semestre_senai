import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

router.get('/jogo', async (req, res) => {

    try {
        const comando = `SELECT * FROM perguntas`;
        const resultado = await BD.query(comando);
        const todasPerguntas = resultado.rows;

        if (todasPerguntas.length == 0) {
            return res.status(404).json({message: 'Nenhuma pergunta cadastrada no banco'});
        }

        const indiceAleatorio = Math.floor(Math.random() * todasPerguntas.length); 
        const perguntaSorteada = todasPerguntas[indiceAleatorio];
        
        const opcoes = [
            perguntaSorteada.opcao_1,
            perguntaSorteada.opcao_2,
            perguntaSorteada.opcao_3,
            perguntaSorteada.opcao_4
        ];

        return res.status(200).json({
            imagem: perguntaSorteada.bandeiras_url,
            respostaCorreta: perguntaSorteada.resposta_correta,
            opcoes: opcoes
        }); 
        
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno ao gerar rodada' + error.message });
    }
});

export default router;