import ClienteRepository from "../repositories/ClienteRepository";

class ClienteController {
  async store(req, res) {
    const { nome, senha, email, endereco, provedor } = req.body;

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
      const clientes = await ClienteRepository.findAll();
      return res.json({ clientes });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }

  async show(req, res) {
    try {
      const cliente = await ClienteRepository.findOne(req.params.id_cliente);
      return res.json({ cliente });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }

}

export default new ClienteController();
