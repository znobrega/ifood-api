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
      tipo_entrega,
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
      tipo_entrega,
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
        req.query.id_restaurante
      );
      return res.json({ restaurante });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }

  async restauranteByName(req, res) {
    try {
      const restaurante = await RestauranteRepository.findRestauranteByName(
        req.body.nome_restaurante
      );

      return res.json({ restaurante });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async cardapio(req, res) {
    console.log(req.query.id_restaurante);
    try {
      const cardapio = await RestauranteRepository.cardapio(
        req.query.id_restaurante
      );

      return res.json({ cardapio });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async allEntregaGratis(req, res) {
    try {
      const restaurantes = await RestauranteRepository.findAllEntregaGratis();

      return res.json({ restaurantes });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async allEntregaRapida(req, res) {
    try {
      const restaurantes = await RestauranteRepository.findAllEntregaRapida();

      return res.json({ restaurantes });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async popular(req, res) {
    try {
      const restaurantes = await RestauranteRepository.findAllPopular();

      return res.json({ restaurantes });
    } catch (err) {
      return res.json({ error: err });
    }
  }
}

export default new RestauranteController();
