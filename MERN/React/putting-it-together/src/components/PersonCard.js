import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: this.props.person.age
        }
    };
    
    increaseAge = () => {
        this.setState({age: this.state.age + 1})
    }
    
    render() {
        const {firstName, lastName, age, hair} = this.props.person;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {hair}</p>
                <button onClick={this.increaseAge}>Increase Age</button>
            </div>
        );
    };
};
    

export default PersonCard;