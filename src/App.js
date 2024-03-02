// import './App.css';
import Navbar from './components/navbar/navbar'
import Slider from './components/slider/slider'
import ProductsList from './components/products/productslist'
import About from './components/about/about'
import ProductDetails from './components/products/productDetails'

import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<><Slider /><ProductsList /></>} />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>

    </div>
  );
}

export default App;
