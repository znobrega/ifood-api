import "dotenv/config";

import express from "express";
import routes from "./routes";

const app = express();

import "./database";

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
