import React from 'react'
// import { Button } from '../ui/button';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white flex items-center justify-between mx-auto max-w-7xl h-16'>
            <div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>

            <div className='flex items-center gap-5'>
                <ul className='flex font  font-medium  items-center gap-5'>
                    <li>Home</li>
                    <li>Job</li>
                    <li>Browse</li>
                </ul>
                {
                    !user ? (
                        <div className='flex items-center gap-3'>
                            <Link to='/login' >
                                <Button variant='outline' className='cursor-pointer'>Login</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button className='bg-[#6A38C2] hover:bg-[#441c89] cursor-pointer'>Signup</Button>
                            </Link>
  
                        </div>
                    ) : (<Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="w-[40px] h-[40px] rounded-full border"
                                />
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent>
                            <div className="flex gap-8 items-start">
                                {/* 2nd Profile Pic (circle fixed) */}
                                <Avatar className="cursor-pointer w-[40px] h-[40px]">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                        className="w-[40px] h-[40px] rounded-full border object-cover"
                                    />
                                </Avatar>

                                <div className="text-sm">
                                    <h4 className="font-medium">hi Neetu</h4>
                                    <p>
                                        Lorem, ipsum dolor sit.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col text-gray-600 '>
                                <div className='flex w-fit items-center gap-8 cursor-pointer'>
                                    <User2 />
                                    <Button variant="link" className='cursor-pointer'>View Profile</Button>
                                </div>
                                <div className='flex w-fit items-center gap-8 cursor-pointer'>
                                    <LogOut />
                                    <Button variant="link" className='cursor-pointer'>Logout</Button>
                                </div>

                            </div>


                        </PopoverContent>
                    </Popover>)
                }

            </div>
        </div>
    )
}

export default Navbar;