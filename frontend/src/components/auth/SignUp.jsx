import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
  const submitHandler=()=>{

  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10 pb-49'>
          <h1 className='font-bold  text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>
              full name :
            </Label>
            <Input type='text'
              // value={input.fullname}
              name='fullname'
              onChange={changeEventHandler}
              placeholder='Enter your name' />
          </div>
          <div className='my-2'>
            <Label>
              Email :
            </Label>
            <Input type='email'
              // value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder='Enter your email' />
          </div>
          <div className='my-2'>
            <Label>
              Phone number :
            </Label>
            <Input type="tel"
              value={input.tel}
              name='tel'
              onChange={changeEventHandler}
              placeholder="Enter your phone number" />
          </div>

          <div className='my-2'>
            <Label>
              password :
            </Label>
            <Input type='password'
              value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder='Enter your password' />
          </div>

          <div className='flex itemes-center justify-between'>
            <RadioGroup className='flex items-center my-5 gap-4'>
              <div className="flex items-center gap-3">
                <Input type='radio'
                  name='role'
                  value='student'
                  // checked={input.role == 'student'}
                  // onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input type='radio'
                  name='role'
                  value='recuiter'

                  // checked={input.role == 'recuiter'}
                  // onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r2">Recuiter</Label>
              </div>
            </RadioGroup>

            <div className='flex items-center gap-2'>
              <Label>Prifile</Label>
              <Input
                accept='image/*'
                type='file'
                onChange={changeFileHandler}
                className='cursor-pointer'
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">SignUp</Button>
          <span className='text-sm'>Already I have an account <Link to='/login' className='text-blue-600'> Login</Link> </span>

        </form>
      </div>
    </div>
  )
}

export default SignUp;