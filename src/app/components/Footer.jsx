import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
    return (
        <>
            <div className=' max-w-screen-xl m-auto mt-6 mb-10'>
                {/* Links */}
                <div className='border-t border-b flex flex-wrap justify-evenly py-4 text-xl font-semibold'>
                    <a href="">Home</a>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms Of Services</a>
                </div>
            </div>

            <div className=' max-w-screen-lg text-center m-auto'>
                <h1 className=' text-2xl font-semibold py-2'>Your Satisfaction Is Our Priority!</h1>
                <p className='text-sm'>Propertify is committed to ensuring everyone has a next-level web experience. We are continuously working to optimize our web experience with a customer-centric design that everyone can easily access and explore. Your feedback is welcome, and if you have any issues you need to report, we're all ears!</p>

                {/* footer logos */}
                <div className='flex justify-center space-x-8 my-8 flex-wrap'>
                    <img className=' w-40' src="https://propertify.com/assets/images/AppStore2.svg" alt="" />
                    <img className=' w-40' src="https://propertify.com/assets/images/AppStore2.svg" alt="" />
                </div>
                <div className='flex flex-wrap justify-center items-center space-x-6 my-8'>
                    <img className=' w-40' src="https://propertify.com/assets/logo/Logo.svg" alt="" />
                    <span className=' text-sm'>Follow Us:</span>
                    <a href="" className='border rounded-xl p-2 border-purple-800'>
                        <Facebook className='text-purple-800' />
                    </a>
                    <a href="" className='border rounded-xl p-2 border-purple-800'>
                        <Instagram className='text-purple-800' />
                    </a>
                    <a href="" className='border rounded-xl p-2 border-purple-800'>
                        <Twitter className='text-purple-800' />
                    </a>
                    <span className=' text-sm'>© 2006-2024 Propertify</span>
                </div>
            </div>
        </>
    )
}

export default Footer