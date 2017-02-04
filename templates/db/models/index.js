'use strict';

const Product = require('./product')
const Review = require('./review');

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review};
