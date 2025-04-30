import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import ProtectedRoute from './routes/ProtectedRoute';
import ProductForm from './components/product/createProduct/ProductForm';
import { ProductInfo } from './components/product/productInfo/ProductInfo';
import Cart from './components/cart/Cart';
import Order from './components/order/Order';
import ProductList from './components/product/productList/ProductList';


function App() {
  return (
    <Router basename='/react-ecom-frontend/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="product/:id" element={<ProductInfo />} />
          <Route path="cart/:id" element={<Cart/>} />
          <Route path="order/:id" element={<Order/>}/>
          <Route path="productlist/:category" element={<ProductList/>}/>
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
            <ProductForm/>
            </ProtectedRoute>
          }
        />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
