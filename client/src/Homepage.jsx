import react, { useState } from 'react';

const HomePage = () => {
    const [selectedActivity, setSelectedActivity] = useState('squats');
    const [reps, setReps] = useState(30);
    const [completed, setCompletedReps] = useState(0);

    const activities = [
        { name: 'Squats', reps: 30 },
        { name: 'Push-Ups', reps: 20 },
        { name: 'Lunges', reps: 20 },
    ];


    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold text-center'>Activity tracker</h1>
            <div className='mt-6'>
                <label htmlFor="activity" className='block text-lg font-medium'>Select Activity</label>
                <select id="activity"></select>
            </div>
        </div>
    )

}

export default HomePage