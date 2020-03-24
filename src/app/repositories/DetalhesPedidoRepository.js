import database from "../../database";

class DetalhesPedidoRepository {
  
  async insertOne(id_pedido, id_comida, quantidade) {
    data = [id_pedido, id_comida, quantidade];

    try {
      const result = await database.client.query(
        `INSERTO INTO comida(id_pedido, id_comida, quantidade) 
        VALUES ($1, $2, $3) RETURNING *`,
        data
      );

      console.log(result);
      return result.rows[0];
    } catch (err) {
      return err;
    }
  }
}

export default new DetalhesPedidoRepository();
