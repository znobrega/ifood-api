import database from "../../database";

class DetalhesPedidoRepository {
  async insertOne(id_pedido, id_comida, quantidade) {
    console.log("INSERINDO COMIDA NO PEDIDO:");
    console.log(id_pedido);
    console.log(id_comida);
    console.log(quantidade);
    try {
      const result = await database.client.query(
        `INSERT INTO detalhes_pedido(id_pedido, id_comida, quantidade) 
        VALUES ($1, $2, $3) RETURNING *`,
        [id_pedido, id_comida, quantidade]
      );

      console.log("==COMIDA INSERIDA NO PEDIDO===");
      console.log(result);
      console.log("==-----COMIDA------===");

      return result.rows[0];
    } catch (err) {
      return err;
    }
  }
}

export default new DetalhesPedidoRepository();
