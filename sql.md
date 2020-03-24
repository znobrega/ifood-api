Tableas 
```sql
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
      
      CREATE TABLE IF NOT EXISTS comida(
        id SERIAL PRIMARY KEY,
        id_restaurante INTEGER NOT NULL, 
        nome VARCHAR(255) NOT NULL, 
        descricao TEXT NOT NULL,
        preco MONEY DEFAULT 10 NOT NULL,
        promocao BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (id_restaurante) REFERENCES usuario(id)
      );

      CREATE TABLE IF NOT EXISTS pedido(
        id SERIAL PRIMARY KEY,
        id_cliente INTEGER NOT NULL, 
        id_restaurante INTEGER NOT NULL, 
        data TIMESTAMP NOT NULL DEFAULT NOW(),
        preco_total MONEY NOT NULL DEFAULT 0,
        frete MONEY NOT NULL DEFAULT 2,
        FOREIGN KEY (id_cliente) REFERENCES usuario(id), 
        FOREIGN KEY (id_restaurante) REFERENCES usuario(id)
      );

      CREATE TABLE IF NOT EXISTS detalhes_pedido(
        id SERIAL PRIMARY KEY,
        id_pedido INTEGER NOT NULL, 
        id_comida INTEGER NOT NULL, 
        preco_comida MONEY NOT NULL DEFAULT 10, 
        quantidade INTEGER NOT NULL DEFAULT 1,
        data TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY (id_pedido) REFERENCES pedido(id),
        FOREIGN KEY (id_pedido) REFERENCES comida(id)
      );
```


Comidas mais vendidas
```sql
SELECT comida.nome, id_comida, COUNT(*) AS VezesPedida, SUM(quantidade) AS QuantidadeDeComida, usuario.nome AS NomeRestaurante
FROM detalhes_pedido
INNER JOIN comida ON comida.id = detalhes_pedido.id_comida
INNER JOIN pedido ON pedido.id = detalhes_pedido.id_pedido
INNER JOIN usuario ON pedido.id_restaurante = usuario.id
GROUP BY id_comida, comida.nome, usuario.nome
ORDER BY QuantidadeDeComida DESC;
```