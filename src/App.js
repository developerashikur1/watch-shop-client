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
import AuthProvider from './components/contexts/AuthProvider';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Payment from './components/DashboardPannel/Payment/Payment';
import DashboardHome from './components/DashboardPannel/DashboardHome/DashboardHome';
import OrderedProducts from './components/DashboardPannel/OrderedProducts/OrderedProducts';



function App() {
  return (
    <AuthProvider>
      <Router>
      
        <Routes>
          <Route exact path='/' element={<><Header/><Home></Home><Footer/></>}></Route>
          <Route path='/home' element={<><Header/><Home></Home><Footer/></>}></Route>
          <Route path='/login' element={<><Header/><Login></Login><Footer/></>}></Route>
          <Route path='/register' element={<><Header/><Register></Register><Footer/></>}></Route>

          {/* PrivateOutlet meaning PrivateRoutes */}
          <Route path='/*' element={<PrivateOutlet/>}>
              <Route path='productsAll' element={<><Header/><ProductsAll></ProductsAll><Footer/></>}></Route>
              <Route path='purchase/:purchaseId' element={<><Header/><PurchasePase></PurchasePase><Footer/></>}></Route>
              {/* Dashboard nested routes */}
              <Route path='dashboard/*' element={<AdminDashboard></AdminDashboard>}>
                <Route path='payment' element={<Payment></Payment>}></Route>
                <Route path='' element={<DashboardHome></DashboardHome>}></Route>
                <Route path='orderedProducts' element={<OrderedProducts></OrderedProducts>}></Route>
              </Route>
          </Route>
        </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
