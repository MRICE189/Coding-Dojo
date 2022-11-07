import React, { useState } from 'react'

const Form = (props) => {
    const {initialState, errorsArr, onSubmitProp} = props;
    const [player, setPlayer] = useState(initialState); 

    const handleChange = (e) => {
        setPlayer(player => ({
            ...player,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(player);
        setPlayer(initialState)
    }

    return (
        <form  onSubmit={onSubmitHandler}>
            {errorsArr.map((err, idx) => {
                return (
                    <p key={idx}>{err}</p>
                )
            })}
            <div className='d-flex justify-content-center gap-3 mt-3'>
                <label>Name:</label><br/>
                <input className='form-control w-25' type="text" name="name" onChange={handleChange} value={player.name}/>
            </div>
            <div className='d-flex justify-content-center gap-3 my-3'>
                <label>Position:</label><br/>
                <input className='form-control w-25' type="text" name="position" onChange={handleChange} value={player.position}/>
            </div>
            <input type="submit" className='btn btn-success'/>
        </form>
    )
}
export default Form;