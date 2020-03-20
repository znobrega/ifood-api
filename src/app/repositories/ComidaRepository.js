import database from "../../database";

class ComidaRepository {
  async insertOne(id_restaurante, nome, preco, descricao) {
    data = [id_restaurante, nome, preco, descricao];

    try {
      const result = await database.client.query(
        `INSERTO INTO comida(id_restaurante, nome, preco, descricao) 
        VALUES ($1, $2, $3, $4)`,
        data
      );

      console.log(result);
      return result.command;
    } catch (err) {
      return err;
    }
  }
}

export default new ComidaRepository();
