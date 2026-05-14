import express from 'express';
import rotasUsuarios from "./Api/src/routes/rotasUsuarios.js";
import rotasServicos from "./Api/src/routes/rotasServicos.js";
import rotasAgendamentos from "./Api/src/routes/rotasAgendamentos.js";

//Importando o Banco de Dados
import { BD, testarConexao } from "./db.js";

//Importando Swagger
import swaggerUI from "swagger-ui-express";
import documentacao from "./Api/config/swagger.js";

//Importando CORS
import cors from 'cors';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Swagger
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao));

//Rota principal
app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json('API FUNCIONANDO ✅');
    res.redirect('/swagger')
});

//Utilizando Rotas
app.use(rotasUsuarios);
app.use(rotasServicos);
app.use(rotasAgendamentos);

const porta = 3000;

app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});
