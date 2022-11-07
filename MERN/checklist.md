# Full MERN Stack 
---
---

## Folder Structure
> Project Folder
>>server (back end)
>>>config

>>>models

>>>controllers

>>>routes

>>>server.js

>>client (front end)
>>>src 

>>>>components

>>>>views

------------------------------
---

## Back End

- create folders for server and modularization
- in server folder:
```
npm init -y
npm install mongoose express cors
```

- in config folder, create mongoose.config.js
```js
const database = 'DATABASE_NAME';
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
```
- in models folder, create a modelName.model.js
```js
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);
```
- in controllers folder, create a modelName.controllers.js
```js
const {Player} = require('../models/player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find()
    .then(allPlayers => res.json({player: allPlayers}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then(onePlayer => res.json({player: onePlayer}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => res.json({player: newPlayer}))
    .catch(err => res.status(400).json(err));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedPlayer => res.json({player: updatedPlayer}))
        .catch(err => res.status(400).json(err));
    }

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}
```

- in routes folder, create a modelName.routes.js
```js
const UserController = require('../controllers/user.controllers');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.post('/api/users', UserController.createUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}
```

- in server.js:
```js
const express = require("express");
const cors = require("cors")
const app = express();
require("../server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
const AllMyUserRoutes = require("../server/routes/MODEL_NAME.routes");
AllMyUserRoutes(app);
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
```

- run back end server in terminal
```
nodemon server.js
```
--------------------
------

## Front End
- in terminal, install front end dependencies
```
npx create-react-app client
cd client
npm install axios react-router-dom react-bootstrap bootstrap
```

- in index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```
- create components and views folder inside client folder
```js
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
```

- create Main.jsx in views folder

```js
import React, {useState, useEffect} from 'react';
import ComponentName from '../components/ComponentName';

const Main = () => {
    return (
        <div>
            <ComponentName />
        </div>
    )
}
export default Main;
```

- setup app.js Routes to display views
```js
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;
```
