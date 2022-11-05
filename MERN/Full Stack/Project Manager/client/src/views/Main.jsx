import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import Products from '../components/Products';

const Main = () => {
    return (
        <div>
            <Form />
            <Products />
        </div>
    )
}

export default Main;