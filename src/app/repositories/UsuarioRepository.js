import database from "../../database";

class UsuarioRepository {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const response = await database.client.query(
        `CREATE TABLE IF NOT EXISTS usuario(
          id SERIAL PRIMARY KEY, 
          provedor BOOLEAN NOT NULL,
          nome VARCHAR(255) NOT NULL,
          senha VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          endereço VARCHAR(255) NOT NULL,
          categoria VARCHAR(255),
          status VARCHAR(255),
          tipo_entrega VARCHAR(255)
        )`
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UsuarioRepository();
