import ComidaRepository from "../repositories/ComidaRepository";

class ComidaController {
  async store(req, res) {
    const {id_restaurante, nome, preco, descricao } = req.body;
    
    if (!id_restaurante) {
      res.status(404).json({ error: "É necessário escolher um restaurante" });
    }
    
    if (!nome) {
      res.status(404).json({ error: "É necessário escolher um nome para comida" });
    }
    
    if (!preco) {
      res.status(404).json({ error: "É necessário escolher um preço para comida" });
    }
    
    if (!preco) {
      res.status(404).json({ error: "É necessário escolher uma descrição para comida" });
    }
    
    const comida = await ComidaRepository.insertOne(id_restaurante, nome, preco, descricao);

    return res.json({comida});
  }

  async index(req, res) {
    const { id_restaurante } = req.query;

    
    if (!id_restaurante) {
      res.status(404).json({ error: "É necessário escolher um restaurante" });
    }

    const comidas = await ComidaRepository.findAll(id_restaurante);

    return res.json({comidas});
  }

  async comidasPopulares(req, res) {
    try {
      const comidas = await ComidaRepository.findMostPopular();

      return res.json({ comidas })
    } catch(err) {
      return res.json(err)
    }
  }
}

export default new ComidaController();
