const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3003;

const sequelize = require("./src/database/conectar.js"); /*conexão com o banco*/

const models = require("./src/models/EnderecoModels.js"); /* conexão com models */

const enderecoRouter = require("./src/routers/enderecoRotas.js"); /* conexão com as rotas */

app.use("/endereco", enderecoRouter); /* ROTA */



app.get("/teste", (req, res) => {
  return res.status(200).json({ menssagem: "servidor funcionando" });
});

async function conectar() {
  try {
    await sequelize.sync();
    app.listen(port, () =>
      console.log(`Servidor rodando na porta http://localhost:${port}`)
    );
  } catch (error) {
    console.log("erro ao conectar com o banco.", error);
  }
}

conectar();
