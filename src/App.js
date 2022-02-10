import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
