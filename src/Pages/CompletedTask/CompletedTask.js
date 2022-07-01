import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CompletedTask = () => {

    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/completedTasks')
            .then(res => {
                console.log(res.data);
                setAllTasks(res.data);
            })
    }, [])

    return (
        <div>
            <h3 className='text-center py-3 text-xl font-bold text-grey'>Completed Task</h3>

            <div className="overflow-x-auto">
                <table className="table mx-auto w-9/12 text-center">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Details</th>
                            <th>Date</th>
                            <th>Task Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTasks.length &&
                            allTasks.map((task, index) => {
                                return task.taskStatus? <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{task.description}</td>
                                <td>{task.date}</td>
                                <td>{task.taskStatus === "1" && <p>Completed</p>}</td>
                                </tr> : null
                            }
                                )
                    }
                            </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;