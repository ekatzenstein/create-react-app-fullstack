const api = module.exports = require('express').Router()
const products = require('./products');
const reviews = require('./reviews');
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/products', products)
  .use('/reviews', reviews)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
