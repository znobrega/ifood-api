import DetalhesPedidoRepository from "../repositories/DetalhesPedidoRepository";

class DetalhesPedidoController {
  async store(req, res) {
    const { id_pedido, id_comida, quantidade, preco } = req.body;

    if (!id_pedido) {
      res.status(404).json({ error: "É Necessário passar o id do pedido" });
    }

    if (!id_comida) {
      res.status(404).json({ error: "É Necessário passar o id de uma comida" });
    }

    if (!quantidade) {
      quantidade = 1;
    }

    const detalhesPedido = await DetalhesPedidoRepository.insertOne(
      id_pedido,
      id_comida,
      quantidade,
      preco
    );

    return res.json({ detalhesPedido });
  }

  //   async index(req, res) {
  //     const { id_restaurante } = req.body;

  //     const comidas = await ComidaRepository.findAll(1);

  //     if (!id_restaurante) {
  //       res.status(404).json({ error: "É necessário escolher um restaurante" });
  //     }

  //     return res.json({comidas});
  //   }
}

export default new DetalhesPedidoController();
