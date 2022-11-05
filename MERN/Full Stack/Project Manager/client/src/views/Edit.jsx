import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get(`http://localhost:8000/api/products/${id}`).catch(err => console.log('error getting product'));
            setProduct(data.data.product);
        })()
    }, []);

    const handleChange = (e) => {
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${product._id}`, product)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        navigate(`/${product._id}`)
    }

    return (
        <div>
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
        </div>
    )
}

export default Edit;