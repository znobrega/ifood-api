import database from "../../database";

class PedidoRepository {
  async insertOne(id_restaurante, id_cliente) {
    data = [id_restaurante, id_cliente];

    try {
      const result = await database.client.query(
        `INSERTO INTO comida(id_restaurante, id_cliente) 
        VALUES ($1, $2)`,
        data
      );

      console.log(result);
      return result.command;
    } catch (err) {
      return err;
    }
  }
}

export default new PedidoRepository();
