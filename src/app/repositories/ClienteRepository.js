import database from "../../database";

// categoria : popular
// tipo_entrga : gratis x rapida
// gratis: descontados R$ 2,00 por pedido
// rapida: acrescentados R$ 2,00 por pedido

class ClienteRepository {
  async criarCliente(cliente) {
    try {
      const result = await database.client.query(
        `INSERT INTO usuario(nome, senha, email, endereco, provedor) 
        VALUES($1, $2, $3, $4, $5);`,
        cliente
      );

      console.log(result);
      return result.command;
    } catch (err) {
      return err;
    }
  }
}

export default new ClienteRepository();
