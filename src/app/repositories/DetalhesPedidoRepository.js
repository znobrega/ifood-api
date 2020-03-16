import database from "../../database";

class DetalhesPedidoRepository {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const response = await database.client.query(
        ` CREATE TABLE IF NOT EXISTS detalhes_pedido(
          id SERIAL PRIMARY KEY,
          id_pedido INTEGER NOT NULL, 
          id_comida INTEGER NOT NULL, 
          preco_comida MONEY NOT NULL, 
          preco_total MONEY NOT NULL,
          quantidade INTEGER NOT NULL DEFAULT 1,
          data TIMESTAMP DEFAULT NOW(),
          FOREIGN KEY (id_pedido) REFERENCES pedido(id),
          FOREIGN KEY (id_pedido) REFERENCES comida(id)
        )`
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export default new DetalhesPedidoRepository();
