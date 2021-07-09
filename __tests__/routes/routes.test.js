import request from 'supertest'
import app from '../../src/app'

describe('Routes', () => {

    it('should get a health check', async () => {
        const response = await request(app)
          .get('/')
    
        expect(response.status).toBe(200);
      });



    it('should get a health check /usuario', async () => {
        const response = await request(app)
          .get('/usuario') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/listar', async () => {
        const response = await request(app)
          .get('/restaurante/listar') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/entregagrati', async () => {
        const response = await request(app)
          .get('/restaurante/entregagratis')

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/entregarapid', async () => {
        const response = await request(app)
          .get('/restaurante/entregarapida')

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/cardapio', async () => {
        const response = await request(app)
          .get('/restaurante/cardapio') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/popular', async () => {
        const response = await request(app)
          .get('/restaurante/popular') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/populare', async () => {
        const response = await request(app)
          .get('/restaurante/populares')

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/precomedio', async () => {
        const response = await request(app)
          .get('/restaurante/precomedio') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/comidamaispedid', async () => {
        const response = await request(app)
          .get('/restaurante/comidamaispedida')

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/comidamaispedidapedid', async () => {
        const response = await request(app)
          .get('/restaurante/comidamaispedidapedido')

          expect(response.status).toBe(200);
     });

    it('should get a health check /restaurante/:id_restaurante', async () => {
        const response = await request(app)
          .get('/restaurante/:id_restaurante') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /comida/promocao', async () => {
        const response = await request(app)
          .get('/comida/promocao') 

          expect(response.status).toBe(200);
     });

     // TODO MISSING FINDALL IMPLEMENTATION
    // it('should get a health check /comida/listar', async () => {
    //     const response = await request(app)
    //       .get('/comida/listar') 

    //       expect(response.status).toBe(404);
    //  });


    //  it('should get a health check /comida/listar', async () => {
    //   const response = await request(app)
    //     .get('/comida/listar?id_restaurante=1') 

    //     expect(response.status).toBe(200);
    //  });

      it('should get a health check /comida/populares', async () => {
        const response = await request(app)
          .get('/comida/populares') 

          expect(response.status).toBe(200);
     });


    it('should get a health check /cliente/listar', async () => {
        const response = await request(app)
          .get('/cliente/listar') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /cliente/:id_cliente', async () => {
        const response = await request(app)
          .get('/cliente/:id_cliente') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /pedido/historicoclient', async () => {
        const response = await request(app)
          .get('/pedido/historicocliente')

          expect(response.status).toBe(200);
     });

    it('should get a health check /pedido/historicorestaurant', async () => {
        const response = await request(app)
          .get('/pedido/historicorestaurante')

          expect(response.status).toBe(200);
     });

    it('should get a health check /pedido/comidas', async () => {
        const response = await request(app)
          .get('/pedido/comidas') 

          expect(response.status).toBe(200);
     });

    it('should get a health check /pedido/relatorio', async () => {
        const response = await request(app)
          .get('/pedido/relatorio') 

          expect(response.status).toBe(200);
     });

    // TODO MISSING FIND ALL IMPLEMENTATION
    // it('should get a health check /pedido/listar', async () => {
    //     const response = await request(app)
    //       .get('/pedido/listar') 

    //       expect(response.status).toBe(404);
    //  });

  })




  describe('Routes POSTS', () => {

    it('should get a health check /restaurante/criar', async () => {
    const response = await request(app)
      .post("/restaurante/criar")
      .send({
        "nome": "Rest_Carlos", 
        "senha": "1234", 
        "email": "carlos@gmail.com", 
        "endereco": "rua_escoteiros", 
        "provedor": true, 
        "categoria": "popular", 
        "status": "aberto", 
        "tipo_entrega": "gratis" 
      })
      
      expect(response.status).toBe(200);
  });
  
  it('should get a health check /restaurante/encontrarpornome', async () => {
    const response = await request(app)
      .post("/restaurante/encontrarpornome")
      .send({
        "nome_restaurante": "Rest_Carlos", 
      })
      
      expect(response.status).toBe(200);
  });
  
  it('should get a health check /comida/adicionarcomida', async () => {
    const response = await request(app)
      .post("/comida/adicionarcomida")
      .send({ 
        "id_restaurante": 1, 
        "nome":"arroz", 
        "preco": 1, 
        "descricao": "test" 
      })
      
      expect(response.status).toBe(200);
  });
  
  it('should get a health check /comida/encontrarcomidapornome', async () => {
    const response = await request(app)
      .post("/comida/encontrarcomidapornome")
      .send({
        "nome_restaurante": "Rest_Carlos", 
      })
      
      expect(response.status).toBe(200);
  });

  it('should get a health check /cliente/criar', async () => {
    const response = await request(app)
      .post("/cliente/criar")
      .send({
        "nome": "Rest_Carlos", 
        "senha": "1234", 
        "email": "carlos@gmail.com", 
        "endereco": "rua_escoteiros", 
        "provedor": false, 
        "categoria": "popular", 
        "status": "aberto", 
        "tipo_entrega": "gratis" 
      })
      expect(response.status).toBe(200);
  });
  

  it('should get a health check /cliente/criar', async () => {
    const response = await request(app)
      .post("/cliente/criar")
      .send({
        "nome": "Rest_Carlos", 
        "senha": "1234", 
        "email": "carlos@gmail.com", 
        "endereco": "rua_escoteiros", 
        "provedor": true, 
        "categoria": "popular", 
        "status": "aberto", 
        "tipo_entrega": "gratis" 
      })
      expect(response.status).toBe(200);
  });

  it('should get a health check /pedido/criar', async () => {
    const response = await request(app)
      .post("/pedido/criar")
      .send({ id_restaurante: 1, id_cliente: 1, tipo_entrega: "mock" })
      
      expect(response.status).toBe(200);
  });
  

  
  it('should get a health check /detalhes_pedido/inserircomida', async () => {
    const response = await request(app)
      .post("/detalhes_pedido/inserircomida")
      .send({ id_pedido: 1, id_comida:2, quantidade:2, preco: 1 })
            expect(response.status).toBe(200);
  });

})



describe('Routes PUTS', () => {

    it('should get a health check /detalhes_pedido/inserircomida', async () => {
    const response = await request(app)
      .put("/restaurante/tipoentrega")

      expect(response.status).toBe(200);
    });

    it('should get a health check /detalhes_pedido/inserircomida', async () => {
    const response = await request(app)
      .put("/comida/delete")

      expect(response.status).toBe(200);
    });

    it('should get a health check /detalhes_pedido/inserircomida', async () => {
    const response = await request(app)
      .put("/comida/update")

      expect(response.status).toBe(200);
    });

    it('should get a health check /detalhes_pedido/inserircomida', async () => {
    const response = await request(app)
      .put("/pedido/atualizarprecototal")

      expect(response.status).toBe(200);
    });
})
