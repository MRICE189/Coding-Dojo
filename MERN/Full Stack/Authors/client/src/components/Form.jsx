import React, { useState } from 'react'

const Form = (props) => {
    const {initialState, errorsArr, onSubmitProp} = props;
    const [author, setAuthor] = useState(initialState); 

    const handleChange = (e) => {
        setAuthor(author => ({
            ...author,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(author);
        setAuthor(initialState)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errorsArr.map((err, idx) => {
                return (
                    <p key={idx}>{err}</p>
                )
            })}
            <p>
                <label>Name:</label><br/>
                <input type="text" name="name" onChange={handleChange} value={author.name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Form;