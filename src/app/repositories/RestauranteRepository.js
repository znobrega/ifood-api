import database from "../../database";

// categoria : popular
// tipo_entrga : gratis x rapida
// gratis: descontados R$ 2,00 por pedido
// rapida: acrescentados R$ 2,00 por pedido

class RestauranteRepository {
  async criarRestaurante(
    nome,
    senha,
    email,
    endereco,
    provedor,
    categoria,
    status,
    tipo_entrega
  ) {
    try {
      const result = await database.client.query(
        `INSERT INTO usuario(nome, provedor, senha, email, categoria, status, tipo_entrega)
      VALUES(${nome}, ${provedor}, ${senha}, ${email}, ${endereco}, ${categoria}, ${status}, ${tipo_entrega}, )`
      );

      console.log(result);
      return result;
    } catch (err) {
      return err;
    }
  }
}

export default new RestauranteRepository();
