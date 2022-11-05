import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import Products from '../components/Products';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/products").catch(err => console.log('error getting products'));
            setProducts(data.data.product);
            setLoaded(true);
        })()
    }, [products]);

    const createProduct = (product) => {
        (async () => {
            const productData = axios.post('http://localhost:8000/api/products', product).catch(err=>console.log(err));
            setProducts([...products, productData.data])
        })();
    }

    return (
        <div>
            <Form  onSubmitProp={createProduct} initialState={{title: "", price: "", description: ""}}/>
            {loaded && <Products products={products}/>}
        </div>
    )
}

export default Main;