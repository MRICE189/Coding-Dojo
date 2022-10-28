import React, {useState} from "react";

const initialState = {
    color: "",
    size: ""
}

const FormData = (props) => {
    const [values, setValues] = useState(initialState);

    const handleSubmit = (e) => {
        //code here
        e.preventDefault();
        props.onNewBox(values);
        setValues(initialState);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setValues(values => ({
            ...values,
            [name]: value
        }))
        console.log(values)
    }

    return (
        <div> 
            <form onSubmit={handleSubmit} className="align-top">
                <div>
                    <label>Color:</label>
                    <input type="text" name="color" className="form-control" onChange={handleChange} value={values.color}></input>
                </div>
                <div>
                    <label>Size in px:</label>
                    <input type="text" name="size" className="form-control" onChange={handleChange} value={values.size}></input>
                </div>
                    <button className="btn btn-secondary my-3">Add Box</button>
            </form>
        </div>
    )
}

export default FormData;