import Body from './Body/Body';
import Nav from './NavBar/Nav';
import Navbar from './NavBar/Navbar';
import Navigation from './NavBar/Navigation';
import Footer from './Footer/Footer';
import MainNav from './NavBar/MainNav';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom'
import Computer from './Computer/Computer';
import Product from './Computer/Product';
import Cart from './Computer/Cart';
import Login from './Admin/Logins/Login';
import Register from './Admin/Logins/Register';
import Admin from './Admin/Admin';


function App() {
  return (
   
    <Router>
        
            <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='/computer' element={<Computer/>}/>
              <Route path='/product/:productId' element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/admin' element={<Admin/>}/>
            </Routes>
         
    </Router>
    
  );
}

export default App;
