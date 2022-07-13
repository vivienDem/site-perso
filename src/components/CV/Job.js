import React from 'react';

const Job = ({ duration, job, employer, location, task }) => {
    return (
        <div>
            <p className='job'>{duration} - <strong>{job}</strong>, ({employer}), {location} </p>
            <ul className='jobTaskList'>
                <li>{task}</li>
            </ul>
        </div>
    );
};

export default Job;