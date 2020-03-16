import database from "../../database";
import Usuario from "../repositories/UsuarioRepository";
import Usuario from "../repositories/PedidoRepository";
import Usuario from "../repositories/ComidaRepository";
import Usuario from "../repositories/DetalhesPedidoRepository";
import RestauranteRepository from "../repositories/RestauranteRepository";

class UsuarioController {
  async store(req, res) {
    const { provedor } = req.body;

    if (!provedor) {
      return res.json({ error: "Cadastro do restaurante incompleto" });
    }

    const restaurante = await RestauranteRepository.criarRestaurante(
      ...req.body
    );

    console.log(restaurante);

    return res.json({ restaurante: restaurante });
  }
}

export default new UsuarioController();
