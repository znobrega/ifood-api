import database from "../../database";

class Usuario {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const response = await database.client.query(
        "CREATE TABLE IF NOT EXISTS nova_arquitetura(nova VARCHAR(10), age INT)"
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Usuario();
