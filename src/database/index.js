import { Pool } from "pg";

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.client = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
      ssl: true
    });

    this.client.connect();

    this.client.query("SELECT NOW()", (err, res) => {
      console.log(err, res);
    });
  }
}

export default new Database();
