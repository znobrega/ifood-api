import UsuarioRepository from "../repositories/UsuarioRepository";

class UsuarioController {
  async show(req, res) {
    try {
      const usuario = await UsuarioRepository.findOne(req.query.email);
      return res.json({ usuario });
    } catch (err) {
      console.log(err);
      return res.json({ error: err });
    }
  }
}

export default new UsuarioController();
