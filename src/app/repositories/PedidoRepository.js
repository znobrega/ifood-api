import database from "../../database";

class PedidoRepository {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const response = await database.client.query(
        ` CREATE TABLE IF NOT EXISTS pedido(
          id SERIAL PRIMARY KEY,
          id_cliente INTEGER NOT NULL, 
          id_restaurante INTEGER NOT NULL, 
          data TIMESTAMP NOT NULL,
          preco_total MONEY NOT NULL,
          frete MONEY NOT NULL DEFAULT 2,
          FOREIGN KEY (id_cliente) REFERENCES usuario(id), 
          FOREIGN KEY (id_restaurante) REFERENCES usuario(id) 
        )`
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new PedidoRepository();
