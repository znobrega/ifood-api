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
}

export default new RestauranteController();
