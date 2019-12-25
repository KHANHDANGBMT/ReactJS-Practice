import React from 'react'

const validation = (props) => {
    let messages = 'Text long enough';

    if (props.length <= 5) {
        messages = 'Text too short';
    }

    return (
        <div>
            <p>{messages}</p>
        </div>
    );
}

export default validation;