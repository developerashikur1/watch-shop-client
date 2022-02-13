import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer';
import ProductsAll from './components/ProductsAllPage/ProductsAll';
import PurchasePase from './components/PurchasePage/PurchasePase';

function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/productsAll' element={<ProductsAll></ProductsAll>}></Route>
          <Route path='/purchase/:purchaseId' element={<PurchasePase></PurchasePase>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
