const EnderecoModels = require("../models/EnderecoModels.js");

class EnderecoController {
  //GET all
  static async mostraTodos(req, res) {
    try {
      const endereco = await EnderecoModels.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
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
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!endereco) {
        return res.status(400).json({
          status: 400,
          menssagem: "endereço não encontrado",
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
      
    };
     
    const enderecoExistente = await EnderecoModels.findOne({
      where: { numero: parseInt(req.body.numero) },
    }); 

     if (enderecoExistente) {
      return res.status(400).json({
        status: 400,
        menssagem: "Endereço existente",
      });
    } 

     
    try {
      await EnderecoModels.create(novoEndereco);
      res.status(200).json({
        status: 200,
        menssagem: "Endereço cadastrado com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Todos os campos devem ser preenchidos",
      });
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
        menssagem: "Endereço não encontrado",
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
        .json({ status: 400, message: 'Endereço não encontrado' });
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
      
    };
    const endereco = await EnderecoModels.findOne({
      where: { id: id },
      raw: true,
    });

    try {
      await EnderecoModels.update(atualizaEndereco, { where: endereco });
      return res.status(200).json({
        status: 200,
        menssagem: "Endereço atualizado com sucesso",
      });
    }  catch (error) {
      return res
         .status(400)
        .json({ status: 400,  message: 'endereço não encontrado'}); 
  }
  }
}

module.exports = EnderecoController;
