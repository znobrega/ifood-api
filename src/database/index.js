import { Pool } from "pg";

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.client = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
      ssl: true
    });

    this.client.connect();

    this.client.query(
      `
      CREATE TABLE IF NOT EXISTS usuario(
        id SERIAL PRIMARY KEY, 
        provedor BOOLEAN NOT NULL,
        nome VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        categoria VARCHAR(255),
        status VARCHAR(255),
        tipo_entrega VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS pedido(
        id SERIAL PRIMARY KEY,
        id_cliente INTEGER NOT NULL, 
        id_restaurante INTEGER NOT NULL, 
        data TIMESTAMP NOT NULL,
        preco_total MONEY NOT NULL,
        frete MONEY NOT NULL DEFAULT 2,
        FOREIGN KEY (id_cliente) REFERENCES usuario(id), 
        FOREIGN KEY (id_restaurante) REFERENCES usuario(id)
      );

      CREATE TABLE IF NOT EXISTS comida(
        id SERIAL PRIMARY KEY,
        id_restaurante INTEGER NOT NULL, 
        nome VARCHAR(255) NOT NULL, 
        descricao TEXT NOT NULL,
        preco MONEY NOT NULL,
        FOREIGN KEY (id_restaurante) REFERENCES usuario(id)
      );

      CREATE TABLE IF NOT EXISTS detalhes_pedido(
        id SERIAL PRIMARY KEY,
        id_pedido INTEGER NOT NULL, 
        id_comida INTEGER NOT NULL, 
        preco_comida MONEY NOT NULL, 
        quantidade INTEGER NOT NULL DEFAULT 1,
        data TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY (id_pedido) REFERENCES pedido(id),
        FOREIGN KEY (id_pedido) REFERENCES comida(id)
      );
    `,
      err => {
        if (!err) console.log("Database connected! \nTABELAS CRIADAS!");
      }
    );
  }
}

export default new Database();
