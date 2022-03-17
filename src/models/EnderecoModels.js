const sequelize = require("../database/conectar.js");
const { DataTypes } = require("sequelize");

const Endereco = sequelize.define("ENDERECO", {
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "pais",
      },
    },
  },

  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    /* validate: {
      isAlpha: {
        msg: "estado",
      },
    }, */
  },

  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
    /* validate: {
      isAlpha: {
        msg: "cidade",
      },
    }, */
  },

  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "bairro",
      },
    },
  },

  rua: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "rua",
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
    /* validate: {
      isAlpha: {
        msg: "digite o complemento",
      },
    }, */
  },
});

module.exports = Endereco;
