import database from "../../database";

class PedidoRepository {
  async insertOne(id_restaurante, id_cliente) {
    data = [id_restaurante, id_cliente];

    try {
      const result = await database.client.query(
        `INSERTO INTO comida(id_restaurante, id_cliente) 
        VALUES ($1, $2) RETURNING *`,
        data
      );

      console.log(result);
      return result.rows[0];
    } catch (err) {
      return err;
    }
  }

  async historicoCliente(id_cliente) {
    try {
      const result = await database.client.query(`
        SELECT * FROM pedido
        INNER JOIN detalhes_pedido
        ON pedido.id = detalhes_pedido.id_pedido
        INNER JOIN comida
        ON detalhes_pedido.id_comida = comida.id
        WHERE pedido.id_cliente = $1;
      `, [id_cliente]);
      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async relatorioPorDia(dia) {
    try {
      const result = await database.client.query(`
      SELECT * FROM pedido
      WHERE pedido.data > CURRENT_DATE - interval '$1 day'
      ORDER BY pedido.data
      `, [dia]);
      return result.rows;
    } catch (err) {
      return err;
    }
  }




}

export default new PedidoRepository();
