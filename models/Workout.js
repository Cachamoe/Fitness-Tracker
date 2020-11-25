const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: String,
    exercises: String,
    unique: true
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
