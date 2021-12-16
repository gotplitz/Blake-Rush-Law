import React from 'react';

const Spinning = () => {
    return (
        <div className='spinning'>
            <div className='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinning;
