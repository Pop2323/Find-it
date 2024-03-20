import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import smartphones_banner from './Components/Assets/smartphones_banner.jpg';
import laptops_banner from './Components/Assets/laptop_banner.jpg';
import watches_banner from './Components/Assets/watche_banner.jpg';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/smartphones" element={<ShopCategory banner={smartphones_banner} category="smartphones"/>} />
        <Route path="/laptops" element={<ShopCategory banner={laptops_banner} category="laptops"/>} />
        <Route path="/watches" element={<ShopCategory banner={watches_banner} category="mens-watches"/>} />
        <Route path="/product" element={ <Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={ <Login /> } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
