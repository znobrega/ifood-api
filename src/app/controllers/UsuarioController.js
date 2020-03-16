import database from "../../database";
import Usuario from "../repositories/UsuarioRepository";
import Usuario from "../repositories/PedidoRepository";
import Usuario from "../repositories/ComidaRepository";
import Usuario from "../repositories/DetalhesPedidoRepository";

class UsuarioController {
  async store(req, res) {
    try {
      const response = await database.client.query(
        "INSERT INTO helloworld(name, age) values('carlos', 21)"
      );

      return res.json(response);
    } catch {
      return res.json({ error: "EROR" });
    }
  }

  async index(req, res) {
    try {
      const response = await database.client.query("SELECT * FROM helloworld");

      return res.json(response);
    } catch {
      return res.json({ error: "ERRROR" });
    }
  }
}

export default new UsuarioController();
