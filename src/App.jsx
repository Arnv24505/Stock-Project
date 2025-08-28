import React from 'react'
import LoginForm from './Components/LoginForm/LoginForm'
import SignUp from './Components/SignUpForm/SignUp'
import UserDashboard from './Components/UserD/UserDashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginForm/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/user',
      element: <UserDashboard />
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
