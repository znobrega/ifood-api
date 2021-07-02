import database from "../../database";

class UsuarioRepository {
  async findOne(email, senha) {
    try {
      const result = await database.client.query(
        `SELECT * FROM usuario 
        WHERE email = $1 AND senha = $2`,
        [email, senha]
      );

      return result.rows;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async verifyExistingEmail(email) {
    try {
      const result = await database.client.query(
        `SELECT COUNT(*) FROM usuario WHERE email = $1`,
        [email]
      );

      return result.rows[0].count > 0;
    } catch (err) {
      return err;
    }
  }
}

export default new UsuarioRepository();
