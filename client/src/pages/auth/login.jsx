import { CommonForm } from '@/components/common/form';
import { loginFormControls } from '@/config';
import React, { useState } from 'react'
import { Link } from 'react-router'

const initialState = {
  email: "",
  password: "",
};


export const AuthLogin = () => {

 const [formData, setFormData] = useState(initialState);
 const onSubmit =(event)=> {}


  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome Back
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Signup
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}
