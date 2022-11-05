import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get(`http://localhost:8000/api/products/${id}`).catch(err => console.log('error getting product'));
            setProduct(data.data.product);
        })()
    }, []);

    const handleDelete = (productID) => {
        (async () => {
            const deletedProduct = await axios.delete(`http://localhost:8000/api/products/${productID}`).catch(err => console.log('error deleting product'));
        })();
        navigate("/");
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/${id}/edit`}>Edit</Link><br />
            <button onClick={(e) => {handleDelete(product._id);}}>Delete</button>
        </div>
    )
}

export default Product;