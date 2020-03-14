import database from "../../database";
import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    database.client.query(
      "CREATE TABLE helloworld(name VARCHAR(10), age INT)",
      (err, res) => {
        console.log(err, res);
      }
    );

    try {
      const response = await database.client.query(
        "INSERT INTO helloworld(name, age) values('carlos', 21) "
      );

      return res.json(response);
    } catch {
      return res.json({ error: "EROR" });
    }
  }

  async index(req, res) {
    try {
      const response = await database.client.query("SELECT * FROM helloworld");

      return res.json(response);
    } catch {
      return res.json({ error: "ERRROR" });
    }
  }
}

export default new UsuarioController();
