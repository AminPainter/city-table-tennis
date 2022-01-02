import React from 'react';

const Service = props => (
    <div className='p-10 bg-gray-100 flex flex-col items-center text-center space-y-4 rounded-xl transition-all duration-500 hover:-translate-y-6 hover:bg-gray-200 hover:shadow-2xl'>
        <div className='h-16 w-16 flex justify-center items-center rounded-full bg-primary bg-opacity-30'>
            <props.icon />
        </div>
        <h3 className='text-2xl capitalize'>{props.title}</h3>
        <p>{props.description}</p>
    </div>
);

export default Service;