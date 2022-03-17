const EnderecoModels = require("../models/EnderecoModels.js");

class EnderecoController {
  //GET all
  static async mostraTodos(req, res) {
    try {
      const endereco = await EnderecoModels.findAll({
        attributes: { exclude: ["createdAt", "updateAt"] },
      });
      return res.status(200).json({ resultado: endereco });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        menssagem: error.menssagem,
      });
    }
  }

  // GET específico
  static async mostrarPorId(req, res) {
    const { id } = req.params;

    try {
      const endereco = await EnderecoModels.findByPk(id, {
        attributes: { exclude: ["createdAt", "updateAt"] },
      });
      if (!endereco) {
        return res.status(400).json({
          status: 400,
          menssagem: "endereço nao encontrado",
        });
      }
      return res.status(200).json({ endereco: endereco });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        menssagem: error.menssagem,
      });
    }
  }

  //CRIAR
  static async criar(req, res) {
    const novoEndereco = {
      pais: req.body.pais,
      estado: req.body.estado,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      rua: req.body.rua,
      cep: parseInt(req.body.cep),
      numero: parseInt(req.body.numero),
      complemento: req.body.complemento,
    };

    /*  if (
      !pais ||
      !estado ||
      !cidade ||
      !bairro ||
      !rua ||
      !cep ||
      !numero ||
      !complemento
    ) {
      return res.status(400).json({
        status: 400,
        menssagem: "Todos os campos devem ser preenchidos",
      });
    }

    const enderecoExistente = await EnderecoModels.findOne({
      where: { rua: rua },
    }); */

    /* if (enderecoExistente) {
      return res.status(400).json({
        status: 400,
        menssagem: "Endereço existente",
      });
    } */

    /*   const novoEndereco = {
      pais,
      estado,
      cidade,
      bairro,
      rua,
      cep,
      numero,
      complemento,
    }; */

    try {
      await EnderecoModels.create(novoEndereco);
      res.status(200).json({
        status: 200,
        menssagem: "Endereço cadastrado com sucesso",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: `Algo deu errado: ${error}` });
    }
  }

  //DELETAR
  static async deletar(req, res) {
    const { id } = req.params;
    const endereco = await EnderecoModels.findOne({
      where: { id: id },
      raw: true,
    });
    if (!endereco) {
      return res.status(400).json({
        status: 400,
        menssagem: "Endereço não foi encontrado",
      });
    }
    try {
      await EnderecoModels.destroy({ where: endereco });
      return res.status(200).json({
        status: 200,
        menssagem: "Endereço apagado com sucesso",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: `Algo deu errado: ${error}` });
    }
  }

  //UPDATE
  static async atualizar(req, res) {
    const { id } = req.params;
    const atualizaEndereco = {
      pais: req.body.pais,
      estado: req.body.estado,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      rua: req.body.rua,
      cep: parseInt(req.body.cep),
      numero: parseInt(req.body.numero),
      complemento: req.body.complemento,
    };
    const endereco = await EnderecoModels.findOne({
      where: { id: id },
      raw: true,
    });
    /* if (!endereco) {
      return res.status(400).json({
        status: 400,
        menssagem: "Endereço não foi encontrado",
      });
    } */
    /* const dadosAtualizados = {
      pais,
      estado,
      cidade,
      bairro,
      rua,
      cep,
      numero,
      complemento,
    }; */
    try {
      await EnderecoModels.update(atualizaEndereco, { where: endereco });
      return res.status(200).json({
        status: 200,
        menssagem: "Endereço atualizado com sucesso",
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: `Algo deu errado: ${error}` });
    }
  }
}

module.exports = EnderecoController;
