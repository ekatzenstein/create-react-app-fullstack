'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Review = db.define('reviews', {
  rating: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
  	defaultValue: 5,
    validate: {
			notEmpty: true,
			isNumeric: true,
			max: 5,
			min: 1,
		}
  },

  review_text: {
  	type: Sequelize.TEXT,
  	allowNull: false,
  	defaultValue: null,
  	validate: {
  		notEmpty: true,
  	}
  }
})

module.exports = Review;
