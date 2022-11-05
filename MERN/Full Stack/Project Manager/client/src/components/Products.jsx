import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/products").catch(err => console.log('error getting products'));
            setProducts(data.data.product);
        })()
    }, [products]);

    const handleDelete = (delIdx, productID) => {
        const filteredProducts = products.filter((product, idx) => {
            return idx !== delIdx
        });
        (async () => {
            const deletedProduct = await axios.delete(`http://localhost:8000/api/products/${productID}`).catch(err => console.log('error deleting product'));
        })();
        setProducts(filteredProducts);
    }

    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <p><Link to={`/${product._id}`}>{product.title}</Link></p>
                        <button onClick={(e) => {handleDelete(idx, product._id);}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;