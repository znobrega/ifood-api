import ComidaRepository from "../repositories/ComidaRepository";

class ComidaController {
  async store(req, res) {
    const { id_restaurante, nome, preco, descricao } = req.body;

    if (!id_restaurante) {
      res.status(404).json({ error: "É necessário escolher um restaurante" });
    }

    if (!nome) {
      res
        .status(404)
        .json({ error: "É necessário escolher um nome para comida" });
    }

    if (!preco) {
      res
        .status(404)
        .json({ error: "É necessário escolher um preço para comida" });
    }

    if (!preco) {
      res
        .status(404)
        .json({ error: "É necessário escolher uma descrição para comida" });
    }

    const comida = await ComidaRepository.insertOne(
      id_restaurante,
      nome,
      preco,
      descricao
    );

    return res.json({ comida });
  }

  async index(req, res) {
    const { id_restaurante } = req.query;

    if (!id_restaurante) {
      res.status(404).json({ error: "É necessário escolher um restaurante" });
    }

    const comidas = await ComidaRepository.findAll(id_restaurante);

    return res.json({ comidas });
  }

  async update(req, res) {
    const { id_comida, nome, preco, descricao, promocao } = req.body;

    const comida = await ComidaRepository.updateOne(
      id_comida,
      nome,
      preco,
      descricao,
      promocao
    );

    console.log(req.body);
    console.log(comida);

    return res.json({ comida });
  }

  async comidasPopulares(req, res) {
    try {
      const comidas = await ComidaRepository.findMostPopular();

      return res.json({ comidas });
    } catch (err) {
      return res.json(err);
    }
  }

  async findMostPopularPedido(req, res) {
    try {
      const comidas = await ComidaRepository.findMostPopularPedido();

      return res.json({ comidas });
    } catch (err) {
      return res.json(err);
    }
  }

  async comidaByName(req, res) {
    try {
      const comidas = await ComidaRepository.findComidaByName(
        req.body.nome_comida
      );

      return res.json({ comidas });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async comidaPromocao(req, res) {
    try {
      const comidas = await ComidaRepository.findComidaPromocao();

      return res.json({ comidas });
    } catch (err) {
      return res.json({ error: err });
    }
  }

  async deleteFromCardapio(req, res) {
    try {
      const comida = await ComidaRepository.deleteFromCardapio(
        req.body.id_comida
      );
      return res.json({ comida });
    } catch (err) {
      return res.json({ error: err });
    }
  }
}

export default new ComidaController();
