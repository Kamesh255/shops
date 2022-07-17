 
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom'
import Products from './component/Products';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/products/:id"  element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
