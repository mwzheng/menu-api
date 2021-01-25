const Food = require('../models/Food');

// Method: GET
// Route: /api/v1/foods
// Description: Returns a list of all food items within the db
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

// Method: GET
// Route: /api/v1/foods/name/:type
// Description: Finds all food items with name to the db
exports.findFoodsByName = async (req, res, next) => {
    try {
        const foods = await Food.find({ name: req.params.name })

        return res.status(200).json({
            success: true,
            foods: foods
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

// Method: GET
// Route: /api/v1/foods/type/:type
// Description: Finds all food items with given type to the db
exports.findFoodsByType = async (req, res, next) => {
    try {
        const foods = await Food.find({ type: req.params.type })

        return res.status(200).json({
            success: true,
            foods: foods
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

// Method: PATCH
// Route: /api/v1/foods/:id
// Description: Updates the food item with the given id from db
exports.updateFood = async (req, res, next) => {
    try {
        const updated = await Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { useFindAndModify: false, new: true });

        return res.status(200).json({
            success: true,
            updatedItem: updated
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Error updating food"
        });
    }
}

// Method: DELETE
// Route: /api/v1/foods/:id
// Description: Deletes the food item with the given id from db
exports.deleteFood = async (req, res, next) => {
    try {
        const foodId = req.params.id;
        const foodToRemove = await Food.findById(foodId);

        if (!foodToRemove) {
            return res.status(404).json({
                success: false,
                error: `Food item with id ${foodId} not found`
            });
        }

        await foodToRemove.remove();

        return res.status(200).json({
            success: true,
            foodRemoved: foodToRemove
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error deleting food"
        });
    }
}