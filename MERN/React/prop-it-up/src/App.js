import './App.css';
import React from 'react';

import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard person={{firstName: 'Jane', lastName: 'Doe', age: 45, hair: 'Black'}}/>
      <PersonCard person={{firstName: 'John', lastName: 'Smith', age: 88, hair: 'Brown'}}/>
      <PersonCard person={{firstName: 'Millard', lastName: 'Fillmore', age: 50, hair: 'Brown'}}/>
      <PersonCard person={{firstName: 'Maria', lastName: 'Smith', age: 62, hair: 'Brown'}}/>
    </div>
  );
}

export default App;
