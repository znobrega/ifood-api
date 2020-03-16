import express from "express";

const routes = new express.Router();

import UsuarioController from "./app/controllers/UsuarioController";
import RestauranteController from "./app/controllers/RestauranteController";

routes.get("/", (req, res) => {
  return "ok";
});
routes.post("/criarrestaurante", RestauranteController.store);

export default routes;
