import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from './components/FormData.jsx'
import FormDisplay from './components/FormDisplay.jsx'

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    console.log('new box is:', newBox)
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <FormData onNewBox={addBox}/>
      <FormDisplay allboxes={boxes}/>
    </div>
  )
}

export default App
