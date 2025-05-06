import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
    date: { type: Date, default: () => new Date().setHours(0, 0, 0, 0) }
});

const Log = mongoose.model('Log', logSchema);

export default Log;