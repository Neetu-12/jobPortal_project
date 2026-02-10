import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">JobPortal</h2>
                        <p className="text-sm mt-2">Connecting talent with opportunity.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">About Us</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
