import React from 'react'
import LoginForm from './Components/LoginForm/LoginForm'
// import SignUp from './Components/SignUpForm/SignUp'
import UserDashboard from './Components/UserD/UserDashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginForm/>
    },
    {
      path: '/user',
      element: <UserDashboard userId={1}/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
