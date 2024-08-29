import React from 'react'

function PopularCities() {
    return (
        <div className='border m-auto bg-slate-100 mt-20'>
            <div className='m-auto max-w-screen-xl mblres:flex-wrap flex my-16'>
                <div>
                    <h1 className='text-2xl font-semibold'>Find Your Home With Propertify. Fast.</h1>
                    <p className='max-w-4xl text-sm'>Rent, Sell or Buy properties, projects, products and Ustad Services on your fingertips Pakistan's Largest unified Property Market Place.</p>
                    <div className='flex my-10 space-x-12'>
                        <div className='flex justify-center items-center'>
                            <img src="https://propertify.com/assets/icons/BudgetFilterForBudget.svg" alt="" />
                            <span className=' text-sm text-purple-800'>Real time property listing</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="https://propertify.com/assets/icons/BudgetFilterForBudget.svg" alt="" />
                            <span className=' text-sm text-purple-800'>Budget Filter For Budget</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="https://propertify.com/assets/icons/BudgetFilterForBudget.svg" alt="" />
                            <span className=' text-sm text-purple-800'>Unified Market Place</span>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div>
                            <img src="https://propertify.com/assets/images/AppStore.svg" alt="" />

                        </div>
                        <div>
                            <img src="https://propertify.com/assets/images/AppStore.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Phone Image */}
                <div>
                    <img src="https://propertify.com/assets/images/DownloadApp.webp" alt="" />
                </div>

            </div>
        </div>
    )
}

export default PopularCities