import database from "../../database";

class ComidaRepository {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const response = await database.client.query(
        ` CREATE TABLE IF NOT EXISTS comida(
          id SERIAL PRIMARY KEY,
          id_restaurante INTEGER NOT NULL, 
          nome VARCHAR(255) NOT NULL, 
          descricao TEXT NOT NULL,
          FOREIGN KEY (id_restaurante) REFERENCES usuario(id)
        )`
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ComidaRepository();
