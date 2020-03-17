import ComidaRepository from "../repositories/ComidaRepository";
import RestauranteRepository from "../repositories/RestauranteRepository";

class ComidaController {
  async store(req, res) {
    // const { id_restaurante, preco, descricao } = req.body;

    const restaurante = await RestauranteRepository.findOne(1);

    return res.json(restaurante);
  }
}

export default new ComidaController();
