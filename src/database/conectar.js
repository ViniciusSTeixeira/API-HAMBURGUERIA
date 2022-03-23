const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");

dotenv.config()

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
