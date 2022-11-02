import './App.css';
import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Planet from './components/Planet';
import People from './components/People';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/people/:personID" element={<People />} />
        <Route path="/planets/:planetID" element={<Planet />} />
        <Route path="/error" element={
          <div>
            <h1>These are not the droids you are looking for!</h1>
            <img src='https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?fit=2560%2C1707' alt='obi-wan pic' height='250px'/>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
