import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import ProductForm from './components/product/createProduct/productForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="admin/create-product" element={<ProductForm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
