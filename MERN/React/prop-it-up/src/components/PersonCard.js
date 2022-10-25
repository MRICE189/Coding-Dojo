import React, {Component} from 'react';

class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hair} = this.props.person;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hair}</p>
            </div>
        );
    }
}

export default PersonCard;