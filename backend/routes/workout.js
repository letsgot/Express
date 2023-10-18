const express = require('express');

const router = express.Router();
const Workout = require('../models/workoutModel.js');
const {
    getWorkouts,createWorkout, getWorkout, deleteWorkout, updateWorkout
} = require('../controllers/workoutController.js')


router.get('/', getWorkouts)

router.get('/:id',getWorkout)

router.post('/', createWorkout );

router.delete('/:id', deleteWorkout)

// The PATCH HTTP method is used to modify the values of the resource properties
router.patch('/:id', updateWorkout)

// router.get('/:id', (req, res) => {
    // res.json({
    //     message: `get data of one user`
    // })
// })



module.exports = router

// flow abhi kuch aisa hai
// server.js se route bnao declear kro
// usko router / filename.js m usko define krdo
// connect a atlas db
// make a schemas and modal
