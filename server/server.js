import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import exerciseRoutes from './routes/exerciseRoutes.js';
import logRoutes from './routes/logRoutes.js';
import progressRoutes from './routes/progressRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/exercises', exerciseRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/report', reportRoutes)

mongoose.connect('mongodb://localhost/rep-tracker')
    .then(() => console.log('Mongo Db connected'))
    .catch((err) => console.log('MongoDB connection failed, error: ', err))

app.get('/', (req, res) => {
    res.send('server is running')
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
}); 