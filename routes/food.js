const express = require('express');
const { getFoods, addFood, deleteFood } = require('../controllers/food.js');
const router = express.Router();

router
    .route('/')
    .get(getFoods)
    .post(addFood)

router
    .route('/:id')
    .delete(deleteFood)

module.exports = router;