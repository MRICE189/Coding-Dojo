import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from './views/Status';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/players/list" element={<Main />} />
        <Route path="/players/add" element={<New />} />
        <Route path="/status/game/:number" element={<Status />} />
      </Routes>
    </div>
  );
}
export default App;