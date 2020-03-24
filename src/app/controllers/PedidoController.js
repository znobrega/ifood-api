import ComidaRepository from "../repositories/ComidaRepository";

class PedidoController {
  async store(req, res) {
    const { id_restaurante, id_cliente } = req.body;

    
    if (!id_restaurante) {
        res.status(404).json({ error: "É necessário escolher um restaurante" });
    }
    
    if (!id_cliente) {
        res.status(404).json({ error: "É necessário ter um cliente" });
    }
    
    const pedido = await PedidoRepository.insertOne(id_restaurante, id_cliente);

    return res.json({pedido});
  }

  async index(req, res) {
    const { id_restaurante } = req.body;

    
    if (!id_restaurante) {
        res.status(404).json({ error: "É necessário escolher um restaurante" });
    }
    
    const comidas = await ComidaRepository.findAll(1);

    return res.json({comidas});
  }
}

export default new PedidoController();
