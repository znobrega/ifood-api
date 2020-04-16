import database from "../../database";

// categoria : popular
// tipo_entrga : gratis x rapida
// gratis: descontados R$ 2,00 por pedido
// rapida: acrescentados R$ 2,00 por pedido

class RestauranteRepository {
  async criarRestaurante(restaurante) {
    try {
      const result = await database.client.query(
        `INSERT INTO usuario(nome, provedor, senha, email, endereco, categoria, status, tipo_entrega) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
        restaurante
      );

      return result.rows[0];
    } catch (err) {
      return err;
    }
  }

  async findOne(id_restaurante) {
    try {
      const result = await database.client.query(
        `SELECT * FROM usuario 
        WHERE id = $1`,
        [id_restaurante]
      );

      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async findAll() {
    try {
      const result = await database.client.query("SELECT * FROM usuario");

      const restaurantes = result.rows.filter((usuario) => usuario.provedor);

      return restaurantes;
    } catch (err) {
      return err;
    }
  }

  async findAllEntregaGratis() {
    try {
      const result = await database.client.query(`
      SELECT * FROM usuario
      WHERE tipo_entrega = 'gratis'
      `);

      const restaurantes = result.rows.filter((usuario) => usuario.provedor);

      return restaurantes;
    } catch (err) {
      return err;
    }
  }

  async findAllEntregaRapida() {
    try {
      const result = await database.client.query(`
      SELECT * FROM usuario
      WHERE tipo_entrega = 'rapida'
      `);

      const restaurantes = result.rows.filter((usuario) => usuario.provedor);

      return restaurantes;
    } catch (err) {
      return err;
    }
  }

  async findAllPopular() {
    try {
      const result = await database.client.query(`
      SELECT * FROM usuario
      WHERE categoria = 'popular'
      `);

      const restaurantes = result.rows.filter((usuario) => usuario.provedor);

      return restaurantes;
    } catch (err) {
      return err;
    }
  }

  async findByDescricao(palavra) {
    try {
      const result = await database.client.query(
        `
        SELECT * FROM usuario 
        INNER JOIN comida
        ON usuario.id = comida.id_restaurante
        WHERE comida.descricao LIKE '%$1%'

      `,
        [palavra]
      );
    } catch (err) {
      return err;
    }
  }

  async findRestauranteByName(nome_restaurante) {
    try {
      const result = await database.client.query(
        `
        SELECT * FROM usuario
        WHERE nome LIKE $1
      `,
        [`%${nome_restaurante}%`]
      );

      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async cardapio(id_restaurante) {
    try {
      const result = await database.client.query(
        `
        SELECT comida.id as id_comida, comida.nome as comida_nome, * FROM comida
        INNER JOIN usuario
        ON comida.id_restaurante = usuario.id
        WHERE usuario.id = $1 AND cardapio = TRUE
      `,
        [id_restaurante]
      );

      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async comidaMaisPedida(id_restaurante) {
    try {
      const result = await database.client.query(
        `
        SELECT usuario.id, 
        usuario.nome, 
        comida.id_restaurante, 
        comida.id, comida.nome, 
        SUM(detalhes_pedido.quantidade) AS quantidade_pedida 
        FROM detalhes_pedido 
        INNER JOIN comida ON detalhes_pedido.id_comida = comida.id 
        INNER JOIN usuario ON comida.id_restaurante = usuario.id 
        WHERE usuario.id = $1 
        GROUP BY usuario.id, comida.id
        ORDER BY quantidade_pedida DESC 
        LIMIT 1;
      `,
        [id_restaurante]
      );

      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async precoMedio(id_restaurante) {
    try {
      const result = await database.client.query(
        `
      SELECT usuario.id, 
      usuario.nome, 
      comida.id_restaurante, 
      comida.id, comida.nome, 
      AVG(detalhes_pedido.preco_comida) AS media FROM usuario 
      INNER JOIN comida ON usuario.id = comida.id_restaurante 
      INNER JOIN detalhes_pedido ON comida.id = detalhes_pedido.id_comida 
      WHERE detalhes_pedido.data > NOW() - interval '8 day' AND usuario.id = $1
      GROUP BY comida.id, usuario.id 
      ORDER BY comida.id, media DESC;
      `,
        [id_restaurante]
      );
      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async restaurantesPopularesMoura() {
    try {
      const result = await database.client.query(
        `
        SELECT usuario.id, 
        usuario.nome,
        usuario.tipo_entrega,
         MAX(preco) AS Maior FROM usuario 
        INNER JOIN comida ON usuario.id = comida.id_restaurante 
        GROUP BY usuario.id
        HAVING MAX(preco) <= '10.00';
      `
      );
      return result.rows;
    } catch (err) {
      return err;
    }
  }

  async updateEntrega(id_restaurante, tipo_entrega) {
    try {
      const result = await database.client.query(
        `
        UPDATE usuario
        SET tipo_entrega = $1
        WHERE id = $2;
      `,
        [tipo_entrega, id_restaurante]
      );
      return result.rows;
    } catch (err) {
      return err;
    }
  }
}

export default new RestauranteRepository();
