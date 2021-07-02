import ClienteRepository from "../repositories/ClienteRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";

class ClienteController {
  async store(req, res) {
    const { nome, senha, email, endereco, provedor } = req.body;
    const emailExists = await UsuarioRepository.verifyExistingEmail(email);

    if (provedor) {
      return res.json({ error: "Cadastro do cliente incompleto!" });
    }
    else if (emailExists) {
      return res.json({ error: "Email existente!" });
    }

    const cliente = await ClienteRepository.criarCliente([
      nome,
      senha,
      email,
      endereco,
      provedor,
    ]);

    console.log(cliente);

    return res.json({ cliente: cliente });
  }

  async index(req, res) {
    try {
      const clientes = await ClienteRepository.findAll();
      return res.json({ clientes });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async show(req, res) {
    try {
      const cliente = await ClienteRepository.findOne(req.params.id_cliente);
      return res.json({ cliente });
    } catch (err) {
      return res.json({ error: err });
    }
  }
}

export default new ClienteController();
