
const Sequelize = require('sequelize');
const db = require('./db');

const Produto = db.sequelize.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }, 
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }
   
});

//Função executado se não existe a tabela
Produto.sync();

module.exports = Produto;