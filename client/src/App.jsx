import React from 'react'
import AuthLayout from './components/auth/layout';
import { AuthLogin } from './pages/auth/login';
import { AuthRegister } from './pages/auth/register';
import { Route, Routes } from 'react-router';
import AdminLayout from './components/admin-view/layout';
import { AdminDashboard } from './pages/admin-view/dashboard';
import { AdminFeatures } from './pages/admin-view/features';
import { AdminOrders } from './pages/admin-view/orders';
import { AdminProducts } from './pages/admin-view/products';
import ShoppingLayout from './components/shopping-view/layout';
import { NotFound } from './pages/notFound';
import { ShoppingAccount } from './pages/shopping-view/account';
import { ShoppingCheckout } from './pages/shopping-view/checkout';
import { ShoppingListing } from './pages/shopping-view/listing';
import { ShoppingHome } from './pages/shopping-view/home';
import { CheckAuth } from './components/common/check-auth';

const App = () => {

  // Dummy data 
  const isAuthenticated = false;
  const user = null;
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
         {/* Auth routes  */}
         <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
         }>
           <Route path="login" element={<AuthLogin/>}/>
           <Route path="register" element={<AuthRegister/>}/>
         </Route>
          {/* Admin routes  */}
         <Route path="/admin" element={
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
           </CheckAuth>
         }>
           <Route path="dashboard" element={<AdminDashboard/>}/>
           <Route path="features" element={<AdminFeatures/>}/>
           <Route path="orders" element={<AdminOrders/>}/>
           <Route path="products" element={<AdminProducts/>}/>
         </Route>
         {/* Shopping routes  */}
          <Route path="/shop" element={
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
           </CheckAuth>
          }>
          <Route path="account" element={<ShoppingAccount/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="home" element={<ShoppingHome/>}/>
          </Route>
          {/* Not Found route  */}
          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
