const Food = require('../models/Food');

// Method: GET
// Route: /api/v1/foods
// Description: Returns all food items within the db
exports.getFoods = async (req, res, next) => {
    try {
        // Get all food items from db
        const foods = await Food.find();

        return res.status(200).json({
            success: true,
            foodCount: foods.length,
            foodItems: foods
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

// Method: POST
// Route: /api/v1/foods
// Description: Adds a new food item to the db
exports.addFood = async (req, res, next) => {
    try {
        const { type, name, ingredients, cost, calories, isVegan } = req.body;

        const newFoodEntry = await Food.create(req.body);

        return res.status(201).json({
            success: true,
            newFood: newFoodEntry
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Error creating new food"
            })
        }
    }
}


// Method: DELETE
// Route: /api/v1/foods/:id
// Description: Deletes the food item with the given id from db
exports.deleteFood = async (req, res, next) => {
    try {

    } catch (error) {

    }
}