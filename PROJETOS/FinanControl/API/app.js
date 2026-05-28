import express from 'express';
import rotasUsuarios from "./src/routes/rotasUsuarios.js";
import rotasCategorias from "./src/routes/rotasCategorias.js";
import rotasSubCategorias from "./src/routes/rotasSubCategorias.js";
import rotasTransacoes from "./src/routes/rotasTransacoes.js";
import Dashboard from "./src/routes/Dashboard.js";

//Importando o Banco de Dados
import { BD, testarConexao } from "./db.js";

//Importando Swagger
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import documentacao from "./config/swagger.js";

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao));

app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json('API FUNCIONANDO ✅');
    res.redirect('/swagger')
});

//Utilizando Rotas
app.use(rotasUsuarios);
app.use(rotasCategorias);
app.use(rotasSubCategorias);
app.use(rotasTransacoes);
app.use(Dashboard);

const porta = 3000;
app.listen(porta, () => {
    console.log(`-> http://localhost:${porta} <-`);
});

app.get('/swagger', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <title>API FinanControl</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
</head>

<body>
  <div id="swagger-ui"></div>

  <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>

  <script>
    SwaggerUIBundle({
      spec: ${JSON.stringify(documentacao)},
      dom_id: '#swagger-ui'
    });
  </script>
</body>
</html>`);
});