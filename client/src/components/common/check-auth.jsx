import React from "react";
import { Navigate, useLocation } from "react-router";

export const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
//   If user is not authenticated and try to access Login or Register page. Then we Redirect to Login page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  //  If user is authenticated and try to access Login or Register page. Then if user is admin (redirected to admin/dashboard) else (redirecte to shopping/home) page
  if(isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("register"))){
     if(user?.role==='admin'){
       return <Navigate to="/admin/dashboard"/>
    }else {
       return <Navigate to="/shop/home"/> 
    }
  }

  // If user is authenticated and user role is not 'admin' and try to access admin page. Then we Redirect to unAuthorized page
  if(isAuthenticated && user?.role!=='admin' && location.pathname.includes("admin")){
     return <Navigate to="/unAuthPage"/>
  }

  // If user is authenticated and user role is 'admin' and try to access normal shopping page. Then we Redirect to /admin/dashboard  page
    if(isAuthenticated && user?.role==='admin' && location.pathname.includes("shop")){
     return <Navigate to="/admin/dashboard"/>
  }

  // If no- one is match then simplly render the children component
  return <>{children}</>
};
