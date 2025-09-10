import React from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div>
        <form action="">
          <h1 className='font-bold'>Sign Up</h1>
          <div>
            <Label>
              full name :
            </Label> 
            
            <input type='text' placeholder='Enter your name'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;