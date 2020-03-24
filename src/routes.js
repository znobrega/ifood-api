import express from "express";

const routes = new express.Router();

// import ClienteController from "./app/controllers/ClienteController";
import RestauranteController from "./app/controllers/RestauranteController";
import ClienteController from "./app/controllers/ClienteController";
import ComidaController from "./app/controllers/ComidaController";
import PedidoController from "./app/controllers/PedidoController";
import DetalhesPedidoController from "./app/controllers/DetalhesPedidoController";

routes.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});

routes.post("/restaurante/criar", RestauranteController.store);
routes.get("//listar", RestauranteController.index);
routes.get("/restaurante/:id_restaurante", RestauranteController.show);

routes.get("/comida/adicionarcomida", ComidaController.store);
// lista comidas de um determinado restaurante
// QUERY: id_restaurante
routes.get("/comida/listar", ComidaController.index);
routes.get("/comida/populares", ComidaController.comidasPopulares);

routes.post("/cliente/criar", ClienteController.store);
routes.get("/cliente/listar", ClienteController.index);
routes.get("/cliente/:id_cliente", ClienteController.show);

routes.post("/pedido/criar", PedidoController.store);
// lista pedidos de um determinado restaurante
// QUERY: id_restaurante
routes.get("/pedido/listar", PedidoController.store);

// id_pedido, id_comida, quantidade
routes.post("/detalhes_pedido/inserircomida", DetalhesPedidoController.store);



export default routes;
