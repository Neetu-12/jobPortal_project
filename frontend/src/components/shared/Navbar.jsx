import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser(true);
        } else {
            setUser(false);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(false);
        alert("You have been logged out!");
        navigate("/login");
    };

    return (
        <div className="bg-white flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
            <div>
                <h1 className="text-2xl font-bold">
                    Job<span className="text-[#F83002]">Portal</span>
                </h1>
            </div>

            <div className="flex items-center gap-5">
                <ul className="flex font-medium items-center gap-5">
                    <li>Home</li>
                    <li>Job</li>
                    <li>Browse</li>
                </ul>

                {!user ? (
                    <div className="flex items-center gap-3">
                        <Link to="/login">
                            <Button variant="outline" className='cursor-pointer'>Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="bg-[#6A38C2] hover:bg-[#441c89] cursor-pointer">
                                Signup
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer w-10 h-10">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="profile"
                                />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className="w-60">
                            <div className="flex gap-3 items-center mb-4">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>

                                <div className="text-sm">
                                    <h4 className="font-medium">Hi! Neetu Sah</h4>
                                    <p className="text-gray-500 text-xs">
                                        Welcome back
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-gray-600">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <User2 size={18} />
                                    <Button variant="link">View Profile</Button>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 w-full justify-start"
                                    onClick={logout}
                                >
                                    <LogOut size={18} />
                                    Logout
                                </Button>


                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>
    );
};

export default Navbar;
