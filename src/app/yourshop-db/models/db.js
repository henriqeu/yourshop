const Sequelize = require("sequelize");
// Option 1: Passing parameters separately
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
    Sequelize,
    sequelize
}

sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com o bancdasdo");
  })
  .catch(function () {
    console.log("Erro de conexão");
  });
