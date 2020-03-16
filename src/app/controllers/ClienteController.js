import database from "../../database";

import ClienteRepository from "../repositories/ClienteRepository";

class ClienteController {
  async store(req, res) {
    const {
      nome,
      senha,
      email,
      endereco,
      provedor,
      categoria,
      status,
      tipo_entrega
    } = req.body;

    if (provedor) {
      return res.json({ error: "Cadastro do cliente incompleto" });
    }

    const cliente = await ClienteRepository.criarCliente([
      nome,
      senha,
      email,
      endereco,
      provedor
    ]);

    console.log(cliente);

    return res.json({ cliente: cliente });
  }

  async index(req, res) {
    try {
      const response = await database.client.query("SELECT * FROM helloworld");

      return res.json(response);
    } catch {
      return res.json({ error: "ERRROR" });
    }
  }
}

export default new ClienteController();
