import React from 'react';

const Job = ({ duration, job, employer, location, task }) => {
    return (
        <div>
            <p className='job'>{duration} - <strong>{job}</strong>, ({employer}), {location}
                <br />
                {task}
            </p>
        </div>
    );
};

export default Job;