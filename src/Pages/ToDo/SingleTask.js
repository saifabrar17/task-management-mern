import React, { useEffect, useState } from 'react';

const SingleTask = ({ singleTask, index }) => {
    const { _id, description, time, date, taskStatus } = singleTask;


    const handleComplete = () => {
        fetch('https://metric-inukshuk-31974.herokuapp.com/complete', {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                id: _id
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
            window.location.reload(false);
        }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{description}</td>
            <td>{time}</td>
            <td>{date}</td>
            <td>{taskStatus === 0 ?  <p>Incomplete</p> : <p>Completed</p>}</td>
            <td>
                <button disabled={taskStatus !== 0} onClick={() => handleComplete(_id)} className='btn btn-success text-white'>Complete</button></td>
        </tr>
    );
};

export default SingleTask;