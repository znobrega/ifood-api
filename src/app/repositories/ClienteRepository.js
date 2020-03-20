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

  async findAll() {
    try {
      const result = await database.client.query("SELECT * FROM usuario");

      const clientes = result.rows.filter(usuario => !usuario.provedor);
      return clientes;
    } catch (err) {
      return err;
    }
  }

  async findOne(idCliente) {
    try {
      const result = await database.client.query(
        `SELECT * FROM usuario 
        WHERE id = $1`,
        idCliente
      );

      console.log(result);
      return result.command;
    } catch (err) {
      return err;
    }
  }
}

export default new ClienteRepository();
