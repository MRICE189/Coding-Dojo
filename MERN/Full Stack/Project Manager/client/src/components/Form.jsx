import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const initialState = {
        title: "",
        price: "",
        description: ""
    }
    const [product, setProduct] = useState(initialState); 

    const handleChange = (e) => {
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        setProduct(initialState)
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