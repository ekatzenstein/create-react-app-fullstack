'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Product = db.define('products', {
  title: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  category: Sequelize.ARRAY(Sequelize.STRING),
  current_price: {
  	type: Sequelize.DOUBLE,
  	allowNull: false
  },
  description: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  availability: {
  	type: Sequelize.BOOLEAN,
  	allowNull: false
  },
  inventory: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }

});

module.exports = Product;
