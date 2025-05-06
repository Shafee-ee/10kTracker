import express from 'express';
import Log from '../models/Log.js';
import Exercise from '../models/Exercise.js';

const router = express.Router();

//Get progress of completed reps for an exercise 

router.get('/:exerciseId', async (req, res) => {
    try {
        const exerciseId = req.params.exerciseId;

        //finding the exercise
        const exercise = await Exercise.findById(exerciseId);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' })
        }

        //counts the logs for this exercise
        const logs = await Log.find({ exerciseId });
        const completedReps = logs.length * exercise.reps;// Reps completed

        //calculate pending reps to reach 10,000
        const remainingReps = 10000 - completedReps;

        res.json({
            completedReps,
            remainingReps,
            totalReps: 10000,
        })


    } catch (err) {
        res.status(500).json({ message: 'Error fetching progress', error: err });
    }


});

export default router;