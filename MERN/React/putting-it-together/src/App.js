import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard.js';


function App() {
  return (
    <div className="App">
      <PersonCard person={{firstName: 'Jane', lastName: 'Doe', age: 45, hair: 'Black'}}/>
      <PersonCard person={{firstName: 'John', lastName: 'Smith', age: 88, hair: 'Brown'}}/>
    </div>
  );
}

export default App;
