const sequelize = require("../database/conectar.js");
const { DataTypes } = require("sequelize");

const Endereco = sequelize.define("ENDEREÇOS", {
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Permitido apenas letras",
      },
    },
  },

  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Permitido apenas letras",
      },
    },
  },

  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Permitido apenas letras",
      },
    },
  },

  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Permitido apenas letras",
      },
    },
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Permitido apenas letras",
      },
    },
  },
  cep: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Permitido apenas números",
      },
    },
  },
  numero: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Permitido apenas números",
      },
    },
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "",
      },
    },
  },
});

module.exports = Endereco;
