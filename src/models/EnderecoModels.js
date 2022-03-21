const sequelize = require("../database/conectar.js");
const { DataTypes } = require("sequelize");

const Endereco = sequelize.define("ENDERECO", {
  pais: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo pais deve ser preenchido",
      },
      is: {
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
      },
    },
  },

  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo estado deve ser preenchido",
      },
      is: {
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
      },
    },
  },

  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo cidade deve ser preenchido",
      },
      is: {
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
        msg: "",
      },
    },
  },

  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo Bairro deve ser preenchido",
      },
      is: {
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
        msg: "",
      },
    },
  },

  rua: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo rua deve ser preenchido",
      },
    },
  },

  cep: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo CEP deve ser preenchido",
      },
      isNumeric: {
        msg: "O campo CEP deve conter somente números",
      },
      len: {
        args: [8],
        msg: "Este campo deve conter 8 dígitos",
      },
    },
  },

  numero: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo número deve ser preenchido",
      },
      isNumeric: {
        msg: "O campo número deve conter somente números",
      },
    },
  },
});

module.exports = Endereco;
