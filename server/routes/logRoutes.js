import express from 'express';
import Log from '../models/Log.js';

const router = express.Router();

//Loggin todays completion for an exercise

router.post('/complete/:exerciseId', async (req, res) => {
    try {
        const exerciseId = req.params.exerciseId;
        const newLog = new Log({ exerciseId });
        await newLog.save();

        res.json({ message: 'Exercise logged for today' });
    } catch (err) {
        res.status(500).json({ message: 'Error logging exercise', error: err })
    }
})

export default router;