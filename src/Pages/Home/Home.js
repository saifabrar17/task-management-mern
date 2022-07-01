import React from 'react';
import AddTask from '../AddTask/AddTask';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    return (
        <div>
            <AddTask></AddTask>
            <ToDo></ToDo>
        </div>
    );
};

export default Home;