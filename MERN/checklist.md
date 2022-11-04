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
const ModelName = require('../models/modelName.model');

module.exports.findAllModelName = (req, res) => {
    ModelName.find()
    .then(allModelName => res.json({modelName: allModelName}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.findOneModelName = (req, res) => {
    ModelName.findOne({_id: req.params.id})
    .then(oneModelName => res.json({modelName: oneModelName}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.createModelName = (req, res) => {
    ModelName.create(req.body)
    .then(newModelName => res.json({modelName: newModelName}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.updateModelName = (req, res) => {
    ModelName.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedModelName => res.json({modelName: updatedModelName}))
        .catch(err => res.json({message: 'something went wrong', error: err}));
}

module.exports.deleteModelName = (req, res) => {
    ModelName.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'something went wrong', error: err}));
}
```

- in routes folder, create a modelName.routes.js
```js
const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}
```

- in server.js:
```js
const express = require("express");
const cors = require("cors")
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
const AllMyUserRoutes = require("./server/routes/MODEL_NAME.routes");
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
npm install axios react-router-dom
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

const ComponentName = () => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
```

- create Main.js in views folder

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
```

- setup app.js Routes to display views
```js
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;
```
