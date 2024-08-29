import React from 'react'

function Categories() {
    return (
        <div className='py-16'>
            {/* Headings */}
            <div className='flex flex-col justify-center items-center w-full py-10'>
                <h1 className='text-2xl font-semibold'>Browse by category</h1>
                <p className='text-sm text-center'>To browse and buy in your areas of interest, look for properties by category.</p>
            </div>

            {/* Cards */}
            <div className='p-10 border flex flex-wrap items-center justify-evenly bg-slate-100'>

                {/* Card1 */}
                <div className='border p-10 max-w-md rounded-xl flex flex-col bg-white shadow-xl justify-center items-center'>
                    <img src="https://propertify.com/assets/images/home/BuyAHome.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=' text-xl text-center'>Rent a home</h2>
                        <p className=' text-sm text-center'>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                        <button className='border-purple-600 border my-4 py-2 px-4 rounded-xl hover:bg-purple-800 hover:text-white '>Browse Homes</button>
                    </div>
                </div>
                {/* Card2 */}
                <div className='border p-10 max-w-md rounded-xl flex flex-col bg-white shadow-xl justify-center items-center'>
                    <img src="https://propertify.com/assets/images/home/BuyAHome.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=' text-xl text-center'>Rent a home</h2>
                        <p className=' text-sm text-center'>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                        <button className='border-purple-600 border my-4 py-2 px-4 rounded-xl hover:bg-purple-800 hover:text-white '>Browse Homes</button>
                    </div>
                </div>
                {/* Card3 */}
                <div className='border p-10 max-w-md rounded-xl flex flex-col bg-white shadow-xl justify-center items-center'>
                    <img src="https://propertify.com/assets/images/home/BuyAHome.webp" alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=' text-xl text-center'>Rent a home</h2>
                        <p className=' text-sm text-center'>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                        <button className='border-purple-600 border my-4 py-2 px-4 rounded-xl hover:bg-purple-800 hover:text-white '>Browse Homes</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories