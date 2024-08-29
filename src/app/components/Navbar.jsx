import React from 'react'
import { Phone } from 'lucide-react'
import { Headphones } from 'lucide-react'
import { Plus } from 'lucide-react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between w-full border-b'>
                <div className='flex '>
                    <Phone className='m-2' />
                    <Headphones className='m-2' />
                </div>
                <div className='flex '>
                    <Phone className='m-2' />
                    <Headphones className='m-2' />
                </div>
            </div>

            <div className=" flex flex-wrap justify-between p-6">
                {/* LOGO */}
                <div >LOGO</div>

                {/* Navlinks */}
                <div>
                    <a className='p-6' href="">Buy</a>
                    <a className='p-6' href="">Rent</a>
                    <a className='p-6' href="">Blog</a>
                </div>

                {/* List Prop Button */}
                <div>
                    <button className='flex w-40 py-2 border rounded-2xl border-purple-600 text-purple-600 justify-center items-center'>List Property <Plus className='h-4 w-4 border ml-2 border-purple-600 rounded-full' /></button>
                </div>
            </div>
        </>

    )
}

export default Navbar