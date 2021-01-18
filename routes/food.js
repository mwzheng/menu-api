const express = require('express');
const { getFoods, addFood, deleteFood, updateFood, findFoodsByName, findFoodsByType } = require('../controllers/food.js');
const router = express.Router();

router
    .route('/')
    .get(getFoods)
    .post(addFood)

router
    .route('/:id')
    .delete(deleteFood)
    .patch(updateFood)

router
    .route('/name/:name')
    .get(findFoodsByName)

router
    .route('/type/:type')
    .get(findFoodsByType)

module.exports = router;