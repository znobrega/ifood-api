import RestauranteRepository from "../repositories/RestauranteRepository";

class RestauranteController {
  async store(req, res) {
    const {
      nome,
      provedor,
      senha,
      email,
      endereco,
      categoria,
      status,
      tipo_entrega
    } = req.body;

    if (!provedor) {
      return res.json({ error: "Cadastro do restaurante incompleto" });
    }

    const restaurante = await RestauranteRepository.criarRestaurante([
      nome,
      provedor,
      senha,
      email,
      endereco,
      categoria,
      status,
      tipo_entrega
    ]);

    return res.json({ restaurante: restaurante });
  }

  async index(req, res) {
    try {
      const restaurantes = await RestauranteRepository.findAll();
      return res.json({ restaurantes });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }

  async show(req, res) {
    try {
      const restaurante = await RestauranteRepository.findOne(
        req.params.id_restaurante
      );
      return res.json({ restaurante });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }
}

export default new RestauranteController();
