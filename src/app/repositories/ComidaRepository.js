import database from "../../database";

class ComidaRepository {
  async insertOne(id_restaurante, nome, preco, descricao) {
    data = [id_restaurante, nome, preco, descricao];

    try {
      const result = await database.client.query(
        `INSERTO INTO comida(id_restaurante, nome, preco, descricao) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
        data
      );

      console.log(result);
      return result.rows[0];
    } catch (err) {
      return err;
    }
  }

  async findMostPopular() {
    try {
      const result = await database.client.query(`
        SELECT comida.nome, id_comida, COUNT(*) AS VezesPedida, SUM(quantidade) AS QuantidadeDeComida, usuario.nome AS NomeRestaurante
        FROM detalhes_pedido
        INNER JOIN comida ON comida.id = detalhes_pedido.id_comida
        INNER JOIN pedido ON pedido.id = detalhes_pedido.id_pedido
        INNER JOIN usuario ON pedido.id_restaurante = usuario.id
        GROUP BY id_comida, comida.nome, usuario.nome
        ORDER BY QuantidadeDeComida DESC;
      `)

      return result.rows
    } catch(err) {
      return err;
    }
  }

  async findComidaByName(nome_comida) {
    console.log(nome_comida)
    try {
      const result = await database.client.query(`
        SELECT * FROM comida
        INNER JOIN usuario
        ON comida.id_restaurante = usuario.id  
        WHERE comida.nome LIKE $1
      `, [`%${nome_comida}%`])

      return result.rows
    } catch (err) {
      return err
    }
  }
}

export default new ComidaRepository();
