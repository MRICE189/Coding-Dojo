import React, { useState } from 'react'

const Form = (props) => {
    const {initialState, onSubmitProp} = props;
    const [product, setProduct] = useState(initialState); 

    const handleChange = (e) => {
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(product);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br/>
                <input type="text" name="title" onChange={handleChange} value={product.title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" name="price" onChange={handleChange} value={product.price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" name="description" onChange={handleChange} value={product.description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Form;