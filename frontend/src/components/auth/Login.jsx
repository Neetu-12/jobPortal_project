import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    role: "",
    file: ""
  });


  const changeEventHandler = () => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = () => {
    setInput({ ...input, [e.target.name]: e.target.files?.[0] });
  };



  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold  text-xl mb-5'>Login</h1>

          <div className='my-2'>
            <Label>
              Email :
            </Label>
            <Input type='email' placeholder='Enter your email' />
          </div>

          <div className='my-2'>
            <Label>
              password :
            </Label>
            <Input type='password' placeholder='Enter your password' />
          </div>

          <div className='flex itemes-center justify-between'>
            <RadioGroup className='flex items-center my-5 gap-4'>
              <div className="flex items-center gap-3">
                <Input type='radio'
                  name='role'
                  value='student'
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input type='radio'
                  name='role'
                  value='recuiter'
                  className='cursor-pointer'
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>

          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className='text-sm'>Don't have an account? <Link to='/signup' className='text-blue-600'> Signup</Link> </span>

        </form>
      </div>
    </div>
  )
}

export default Login;