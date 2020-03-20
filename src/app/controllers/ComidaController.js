import ComidaRepository from "../repositories/ComidaRepository";
import RestauranteRepository from "../repositories/RestauranteRepository";

class ComidaController {
  async store(req, res) {
    const { id_restaurante, preco, descricao } = req.body;

    const restaurante = await RestauranteRepository.findOne(1);

    if (!restaurante) {
      res.status(404).json({ error: "Restaurante não existe" });
    }

    if (restaurante.categoria === "popular") {
      await ComidaRepository.insertOne(id_restaurante, nome, 10, descricao);
    } else {
      await ComidaRepository.insertOne(id_restaurante, nome, preco, descricao);
    }

    return res.json(restaurante);
  }
}

export default new ComidaController();
