import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import Product from './views/Product';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
export default App;