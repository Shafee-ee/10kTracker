import express from 'express';
import Exercise from '../models/Exercise.js';

const router = express.Router();

//adding Exercise

router.post('/add', async (req, res) => {
    const { name, reps } = req.body;

    const newExercise = new Exercise({ name, reps });
    try {
        await newExercise.save();
        res.status(201).json({ message: 'Exercise added' })
    } catch (error) {
        res.status(500).json({ message: 'Error adding exercise', error })
    }
});

// get all the exercises
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Data', error })
    }
})

export default router;
