import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const {number, color, bg} = useParams();
    console.log(number, color, bg)
    if (color && bg) {
        return (
            <div>
                <p style={{color: color, backgroundColor: bg}}>The word is: {number}</p>
            </div>
        )
    }
    else if (!isNaN(+number)) {
        return (
            <div>
                <p>The number is: {number}</p>
            </div>
            )
    }
    else {
        return (
            <div>
                <p>The word is: {number}</p>
            </div>
        )
    }
}

export default Number