import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form action="" className='border p-6'>
        <h1 className='text-center text-3xl font-bold mb-8'>Signup Form</h1>
        <div className='flex justify-center pb-5'>
            <input type="text" placeholder="Username" className='border border-white rounded-xl w-60 text-center' required/>
        </div>
        <div className="flex justify-center pb-6">
            <input type="password" placeholder="Password" className='border border-white rounded-xl w-60 text-center' required/>
        </div>

        <button type="submit" className='block m-auto border border-white rounded-xl w-60 text-center'>Login</button>

        <div className="p-5">
            <p className='text-center text-sm'>Already have an account? <Link to="/login" className='text-blue-400'>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
