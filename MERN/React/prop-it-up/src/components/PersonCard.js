import React, {Component} from 'react';

const PersonCard = props => {
        return (
            <div>
                <h1>{props.person.lastName}, {props.person.firstName}</h1>
                <p>Age: {props.person.age}</p>
                <p>Hair color: {props.person.hair}</p>
            </div>
        );
    }


export default PersonCard;