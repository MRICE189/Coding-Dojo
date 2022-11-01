import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:number/:color/:bg" element={<Number />} />
      </Routes>
    </div>
  )
}

export default App
