import express from 'express';
import mongoose from 'mongoose';
import Log from '../models/Log.js';

const router = express.Router();

router.get('/daily/:exerciseId', async (req, res) => {
    try {
        const { exerciseId } = req.params;

        const logs = await Log.aggregate([
            {
                $match: {
                    exerciseId: new mongoose.Types.ObjectId(exerciseId)
                }
            }, {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$date' }
                    },
                    timesDone: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    date: '$_id',
                    timesDone: 1,
                    totalReps: { $multiply: ['$timesDone', 30] }
                }
            }
        ]);
        res.json(logs);

    } catch (err) {
        res.status(500).json({ message: 'Error generating report', error: err });
    }

});

export default router;