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
      DROP TABLE IF EXISTS usuario, pedido, comida, detalhes_pedido;

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
        preco MONEY DEFAULT 10 NOT NULL,
        promocao BOOLEAN DEFAULT FALSE,
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
        else console.log(err);

        this.seeds();
      }
    );
  }

  seeds() {
    this.client.query(
      `
      INSERT INTO usuario (nome, senha, email, endereco, provedor)
      VALUES ('Hudson', 1234, 'hudson@gmail.com', 'valentina', false),
              ('Bruno', 1234, 'bruno@gmail.com', 'mangabeira', false),
              ('Carlos', 1234, 'carlos@gmail.com', 'bessa', false),
              ('Moura', 1234, 'moura@gmail.com', 'bancarios', false);
    `,
      err => {
        if (!err) console.log("CLIENTES CRIADOS!");
        else console.log(err);
      }
    );

    this.client.query(
      `
      INSERT INTO usuario(nome, senha, email, endereco, provedor, categoria, status, tipo_entrega)
      VALUES 
      ('Akita', 1234, 'akita@gmail.com', 'bessa', true, 'japones', 'aberto', 'gratis'),
      ('China', 1234, 'china@gmail.com', 'estados', true, 'chines', 'aberto', 'gratis'),
      ('Dominos', 1234, 'dominos@gmail.com', 'estados', true, 'pizzaria', 'aberto', 'gratis'),
      ('Emporio', 1234, 'emporio@gmail.com', 'bancarios', true, 'popular', 'aberto', 'gratis'),
      ('Peixada', 1234, 'peixada@gmail.com', 'bancarios', true, 'popular', 'aberto', 'rapida'),
      ('Passagem', 1234, 'passagem@gmail.com', 'mangabeira', true, 'popular', 'aberto', 'rapida');

    `,
      err => {
        if (!err) console.log("RESTAURANTES CRIADOS!");
        else console.log(err);
      }
    );

    this.client.query(
      `
      INSERT INTO comida(id_restaurante, nome, preco, descricao)
      VALUES 
      (5, 'Sushi', 5, 'peça de peixe'),
      (5, 'Temaki', 20, 'temaki recheado'),
      (6, 'yakisoba', 5, 'macarrçao chines'),
      (6, 'polvo com camarão', 20, 'frutos do mar'),
      (7, 'Pizza de americana', 30, 'queijo, palmito, ervilha, ovo'),
      (7, 'Pizza de bacon', 29, 'catupiry, bacon'),
      (8, 'Arroz integral', 10, 'arroz'),
      (8, 'Arroz Branco', 10, 'arroz'),
      (8, 'Arroz com cenoura', 10, 'arroz'),
      (8, 'Carne cozida', 10, 'carne'),
      (8, 'Frango grelhado', 10, 'frango'),
      (9, 'Salmão frito', 10, 'peixe'),
      (9, 'Bacalhau frito', 10, 'peixe'),
      (9, 'Baiacu cozido', 10, 'peixe'),
      (10, 'Espaguete', 10, 'macarrão'),
      (10, 'churrasco', 10, 'carne'),
      (10, 'salada', 10, 'legumes');
    `,
      err => {
        if (!err) console.log("COMIDAS CRIADOS!");
        else console.log(err);
      }
    );
  }
}

export default new Database();
