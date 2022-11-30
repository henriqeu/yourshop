const express = require("express");

//const { restart } = require("nodemon");

// Models
const Produto = require("./models/Produto");
////////////////

const app = express();

//const port = process.env.SERVER_PORT || 8000;

app.use(express.json());

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/", async (req, res) => { 
  res.send("Pagina Incial!");
});

// Todos Produtos
app.get("/products", async (req, res) => {
    const produto = await Produto.findAll();
    res.status(200).json(produto);
  });
  

app.listen(8080, () => {
    console.log("listening on port http://localhost:8080");
  });
  