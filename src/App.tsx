import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import ProtectedRoute from './routes/ProtectedRoute';
import ProductForm from './components/product/createProduct/ProductForm';


function App() {
  return (
    <Router basename='/react-ecom-frontend/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
           {/* User Route */}
        {/* <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* Admin Route */}
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
            <ProductForm/>
            </ProtectedRoute>
          }
        />
          {/* <Route path="admin/create-product" element={<ProductForm/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
