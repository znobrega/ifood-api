
## Como utilizar?

- Baixe o repositório, poder ser o zip ou com ```git clone```
- entre no diretório dos arquivos
- no terminal, digite ```npm install```
- depois, no terminal, digite ```npm run dev```
- Após estes passos o servidor estará rodando


## Connection database with Node

**OBS**: O **Pool** e o **Client** servem para a mesma coisa, porém o **Pool** fornece mais ferramentas para o desenvolvimento. Basicamente, o **Pool** é um **Client** melhorado 

```js

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

client.query(
  "CREATE TABLE helloworld(name VARCHAR(10), age INT)",
  (err, res) => {
    console.log(err, res);
  }
);

```

## Postbird: GUI para o Postgres

<p>Utilizando uma GUI você tem consegue obter informaçes sobre o estado do seu banco de dados mais facilmente.</p>

Download: <a href="https://electronjs.org/apps/postbird"> Postbird </a>

![home-Postbird](/home-postbird.png)
<p>Para fazer a conexão com o seu banco de dados, é só preencher com os dados do mesmo.</p>
<p>Utilizando o Heroku, o ideal é se conectar pela aba ConnectionUrl ou Heroku, prefiro pela ConnectionUrl porque a equipe inteira pode se conectar de forma mais facilmente.</p>

- Conexão:

>é necessário adiciona '?ssl=true' no final da url connection

### Como deve ser:

```
  postgres://xfhgkvvyxyucxp:7ccb2d56e151734bf418bf1facb323894c62f2b1fd5f4ab092992892a58ff780@ec2-174-129-253-62.compute-1.amazonaws.com:5432/dcq1ndmqjjjtcb?ssl=true
```

### url padrão cedida pelo heroku

```
  postgres://xfhgkvvyxyucxp:7ccb2d56e151734bf418bf1facb323894c62f2b1fd5f4ab092992892a58ff780@ec2-174-129-253-62.compute-1.amazonaws.com:5432/dcq1ndmqjjjtcb
  
```

![conexão-postbird](/home-postbird.png)

- Caso a conexão tenha sido um sucesso, deve aparecer algo assim:
![info-postbird](/home-postbird.png)

