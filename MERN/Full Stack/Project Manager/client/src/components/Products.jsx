import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/products").catch(err => console.log('error getting products'));
            setProducts(data.data.product);
        })()
    }, [products]);

    const removeFromDom = (productID) => {
        setProducts(products.filter(product => product._id != productID))
    }

    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <p><Link to={`/${product._id}`}>{product.title}</Link></p>
                        <DeleteButton productID={product._id} successCallback={()=> removeFromDom(product._id)} />
                    </div>
                )
            })}
        </div>
    )
}
export default Products;