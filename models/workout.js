const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name is required."
        },
        distance: Number,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
});

workoutSchema.virtual("totalDuration").get(function() {
    let totalDuration = 0;
    this.exercises.forEach(exercise => {
        totalDuration += exercise.duration;
    });
    return totalDuration;
});

workoutSchema.set('toJSON', { virtuals: true });

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;