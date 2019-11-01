const express = require("express");
const app = express();

const { Pool } = require("pg");

const client = new Pool({
  user: "xfhgkvvyxyucxp",
  host: "ec2-174-129-253-62.compute-1.amazonaws.com",
  database: "dcq1ndmqjjjtcb",
  password: "7ccb2d56e151734bf418bf1facb323894c62f2b1fd5f4ab092992892a58ff780",
  port: 5432,
  ssl: true
});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
});

app.get("/", (req, res) => {
  client.query(
    "CREATE TABLE helloworld(name VARCHAR(10), age INT)",
    (err, res) => {
      console.log(err, res);
    }
  );
});

app.get("/insert", async (req, res) => {
  try {
    const response = await client.query(
      "INSERT INTO helloworld(name, age) values('carlos', 21) "
    );

    return res.json(response);
  } catch {
    return res.json({ error: "EROR" });
  }
});

app.get("/show", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM helloworld");

    return res.json(response);
  } catch {
    return res.json({ error: "ERRROR" });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
