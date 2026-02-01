import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    role: "",
    // file: ""
  });

  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    setInput(input => ({
      ...input,
      [name]: value
    }));
  };

  // const changeFileHandler = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.files[0] });
  //   // const file = e.target.files[0];
  //   // setInput(input => ({
  //   //   ...input,
  //   //   file: file
  //   // }));
  // };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(input, "input by me");
    axios.post('http://localhost:8000/api/v1/user/register', input)
      .then((result) => {
        if (result.data.message === "Account created successfully.") {
          alert("Registered successfully.");
          navigate("/login");
        } else {
          alert("Already registered, kindly try with another account!");
        }

      }).catch((err) => {
        alert(err.result?.data?.message || "Something went wrong");
      });
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 pb-49'>
          <h1 className='font-bold  text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>
              full name :
            </Label>
            <Input type='text'
              value={input.fullname}
              name='fullname'
              onChange={changeEventHandler}
              placeholder='Enter your name' />
          </div>
          <div className='my-2'>
            <Label>
              Email :
            </Label>
            <Input type='email'
              value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder='Enter your email' />
          </div>
          <div className='my-2'>
            <Label>
              Phone number :
            </Label>
            <Input type="phoneNumber"
              value={input.phoneNumber}
              name='phoneNumber'
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
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input type='radio'
                  name='role'
                  value='recruiter'

                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r2">recruiter</Label>
              </div>
            </RadioGroup>

            {/* <div className='flex items-center gap-2'>
              <Label>profile</Label>
              <Input
                accept='image/*'
                type='file'
                name='file'
                checked={input.file === 'file'}
                onChange={changeFileHandler}
                className='cursor-pointer'
              />
            </div> */}

          </div>
          <Button type="submit" className="w-full my-4">SignUp</Button>
          <span className='text-sm'>Already I have an account <Link to='/login' className='text-blue-600'> Login</Link> </span>

        </form>
      </div>
    </div>
  )
}

export default SignUp;