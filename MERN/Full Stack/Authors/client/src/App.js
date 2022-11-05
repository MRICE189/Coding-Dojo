import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}
export default App;