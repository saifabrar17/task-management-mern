import axios from 'axios';
import React from 'react';

const AddTask = () => {

    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const currentTime = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

    const status = 0;

    // console.log(currentDate);
    // console.log(currentTime);

    const handleSubmit = event => {
        event.preventDefault();
        const addItem = {

            description: event.target.description.value,
            time: currentTime,
            date: currentDate,
            taskStatus: status

        }
        axios.post('https://metric-inukshuk-31974.herokuapp.com/allTasks', addItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    console.log('Product Added Successfully!');
                    event.target.reset();
                    console.log(data);
                }
            })
    }


    return (
        <div>
            <h3 className='text-center py-3 text-xl font-bold text-grey'>Add New Task</h3>
            <div className='flex justify-center'>
                <div className="form-control">
                    <div className="input-group">
                        <form className='d-flex flex-column' onSubmit={handleSubmit}>
                            <input className='input input-bordered' placeholder='Task Description' name='description' />

                            <input className='btn btn-primary' type="submit" value="Add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;