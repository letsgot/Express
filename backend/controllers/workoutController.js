const mongoose = require('mongoose');
const Workout = require('../models/workoutModel.js')

const getWorkouts = async (req, res) => {
    try {
        let workouts = await Workout.find();
        res.status(200).json({
            workouts,
            message: "This is api/workouts"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json({
            workout,
            message: "Workout created successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let workout = await Workout.findById(id);
    if (workout===null) {
        return res.status(404).json({
          message: 'Workout Not found'
        })
    }

    res.status(201).json({
        workout,
        message: `get data of one user`
    })
}

const deleteWorkout = async(req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let workout = await Workout.findByIdAndDelete(id);
    if (workout===null) {
        return res.status(404).json({
          message: 'Workout Not found'
        })
    }

    res.status(201).json({
        workout,
        message: `workout delete`
    })
}

const updateWorkout = async(req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let workout = await Workout.findByIdAndUpdate(id ,
        {...req.body}
        );
    if (workout===null) {
        return res.status(404).json({
          message: 'Workout Not found'
        })
    }

    res.status(201).json({
        workout,
        message: `workout updated`
    })
}

module.exports = {
    getWorkouts,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}