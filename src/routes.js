import express from "express";

const routes = new express.Router();

// import ClienteController from "./app/controllers/ClienteController";
import RestauranteController from "./app/controllers/RestauranteController";
import ClienteController from "./app/controllers/ClienteController";
import ComidaController from "./app/controllers/ComidaController";

routes.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});

routes.post("/restaurante/criar", RestauranteController.store);
routes.get("/restaurante/listar", RestauranteController.index);

routes.get("/comida/adicionarcomida", ComidaController.store);

routes.post("/cliente/criar", ClienteController.store);
routes.get("/cliente/listar", ClienteController.index);

export default routes;
