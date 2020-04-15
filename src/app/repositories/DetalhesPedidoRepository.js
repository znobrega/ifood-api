import database from "../../database";

class DetalhesPedidoRepository {
  async insertOne(id_pedido, id_comida, quantidade) {
    try {
      const result = await database.client.query(
        `INSERT INTO detalhes_pedido(id_pedido, id_comida, quantidade) 
        VALUES ($1, $2, $3) RETURNING *`,
        [id_pedido, id_comida, quantidade]
      );

      return result.rows[0];
    } catch (err) {
      return err;
    }
  }
}

export default new DetalhesPedidoRepository();
