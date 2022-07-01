import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const Calander = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className='mx-auto w-2/4'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default Calander;