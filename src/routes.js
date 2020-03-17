import express from "express";

const routes = new express.Router();

// import ClienteController from "./app/controllers/ClienteController";
import RestauranteController from "./app/controllers/RestauranteController";
import ClienteController from "./app/controllers/ClienteController";
import ComidaController from "./app/controllers/ComidaController";

routes.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});

routes.post("/criarrestaurante", RestauranteController.store);
routes.post("/criarcliente", ClienteController.store);
routes.get("/adicionarcomida", ComidaController.store);

export default routes;
