import React from 'react';

const Heading = props => (
    <h2 className='inline-block text-primary text-3xl relative after:absolute after:w-24 after:h-1 after:-left-32 after:bg-primary after:top-1/2 after:translate-y-1/2 before:absolute before:w-24 before:h-1 before:-right-32 before:bg-primary before:top-1/2 before:translate-y-1/2'>{props.children}</h2>
);

export default Heading;