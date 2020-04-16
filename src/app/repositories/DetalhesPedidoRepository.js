import database from "../../database";

class DetalhesPedidoRepository {
  async insertOne(id_pedido, id_comida, quantidade, preco) {
    try {
      const result = await database.client.query(
        `INSERT INTO detalhes_pedido(id_pedido, id_comida, preco_comida , quantidade) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
        [id_pedido, id_comida, preco, quantidade]
      );

      return result.rows[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default new DetalhesPedidoRepository();
