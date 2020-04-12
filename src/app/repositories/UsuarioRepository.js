import database from "../../database";

class UsuarioRepository {
  async findOne(email) {
    try {
      const result = await database.client.query(
        `SELECT * FROM usuario 
        WHERE email = $1`,
        [email]
      );

      console.log(result.rows);

      return result.rows;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default new UsuarioRepository();
