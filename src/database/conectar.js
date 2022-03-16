const { Sequelize } = require("sequelize");
require("dotenv-safe/config.js");

const sequelize = new Sequelize(process.env.DB_URL);

async function conectar() {
  try {
    await sequelize.authenticate();
    console.log("conectou com o banco.");
  } catch (error) {
    console.log("não foi possivel conectar com o banco", error);
  }
}
conectar();

module.exports = sequelize;