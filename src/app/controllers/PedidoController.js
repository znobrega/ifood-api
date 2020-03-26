import ComidaRepository from "../repositories/ComidaRepository";
import PedidoRepository from "../repositories/PedidoRepository"

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

  async historicoPedidosCliente(req, res) {
    const pedidos = await PedidoRepository.historicoCliente(req.body.id_cliente);

    return res.json({pedidos})
  }

  async relatorioDia(req, res) {
    const relatorio1dia = await PedidoRepository.relatorioPorDia(1)
    const relatorio7dias = await PedidoRepository.relatorioPorDia(7)
    const relatorio30dias = await PedidoRepository.relatorioPorDia(30)

    return res.json({
      relatorio1dia,
      relatorio7dias,
      relatorio30dias
    })
  }

  async updatePrecoPedido(req, res) {
    const {id_pedido, preco_total} = req.body

    const pedido = await PedidoRepository.updatePrecototal(id_pedido, preco_total)

    return res.json({pedido})
  }
}

export default new PedidoController();
