import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const ToDo = () => {

    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        fetch('https://metric-inukshuk-31974.herokuapp.com/allTasks')
            .then(res => res.json())
            .then(data => setAllTasks(data));
    }, [])

    return (
        <div>
            <h3 className='text-center py-3 text-xl font-bold text-grey'>All Tasks</h3>
            <div className="overflow-x-auto">
                <table className="table mx-auto  w-9/12 text-center">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Details</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Task Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTasks.map((singleTask, index)=> <SingleTask
                                key={singleTask._id}
                                index={index}
                                singleTask={singleTask}
                            ></SingleTask>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ToDo;