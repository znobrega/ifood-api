import express from "express";

const routes = new express.Router();

import database from "./database";

import UsuarioController from "./app/controllers/UsuarioController";

routes.get("/", UsuarioController.store);

routes.get("/insert", UsuarioController.store);

routes.get("/show", UsuarioController.index);

export default routes;
