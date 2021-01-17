const mongoose = require('mongoose');

// Schema for a Food item for Mongodb
const FoodSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please include the food type"]
    },
    name: {
        type: String,
        required: [true, "Please give the item a name"]
    },
    ingredients: {
        type: [{ type: String }], // Array of Strings
        default: []
    },
    cost: {
        type: Number,
        min: .01,
        required: [true, "Please specify the cost"]
    },
    calories: {
        type: Number,
        min: 0,
        required: [true, "Please specify the calories"]
    },
    isVegan: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Food", FoodSchema);