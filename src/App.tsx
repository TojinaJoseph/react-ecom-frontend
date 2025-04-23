import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import ProtectedRoute from './routes/ProtectedRoute';
import ProductForm from './components/product/createProduct/ProductForm';
import { ProductInfo } from './components/product/productInfo/ProductInfo';


function App() {
  return (
    <Router basename='/react-ecom-frontend/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="product/:id" element={<ProductInfo />} />
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
