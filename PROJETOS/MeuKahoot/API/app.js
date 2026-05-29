import express from 'express';
import { BD, testarConexao } from "./db.js";
import cors from 'cors';
import rotasMeuJogo from './src/routes/rotasMeuJogo.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    await testarConexao();
    res.status(200).json('API FUNCIONANDO ✅');
});

//Utilizando Rotas
app.use(rotasMeuJogo)

const porta = 3000;
app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});
