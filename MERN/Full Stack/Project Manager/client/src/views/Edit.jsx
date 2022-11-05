import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

const Edit = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get(`http://localhost:8000/api/products/${id}`).catch(err => console.log('error getting product'));
            setProduct(data.data.product);
            setLoaded(true);
        })()
    },[]);

    const onUpdateHandler = (edittedProduct) => {
        (async () => {
            await axios.put(`http://localhost:8000/api/products/${product._id}`, edittedProduct).catch(err => console.log(err));
        })()
        navigate(`/${product._id}`)
    }

    return (
        <div>
            {loaded && (
                <Form
                    onSubmitProp={onUpdateHandler}
                    initialState={{ title: product.title, price: product.price, description: product.description }}
                />
            )}
        </div>
    )
}

export default Edit;