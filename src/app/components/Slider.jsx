import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
// import Background from '../../../public/Header.webp'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function Slider() {
  return (
    <div className="bg-[url('https://propertify.com/assets/images/home/Header.webp')] bg-center bg-no-repeat min-h-96 border bg-cover py-48 flex justify-center flex-col items-center">
      {/* Text */}
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-white font-bold text-4xl text-center'>Find Your Perfect Home:</h1>
        <h2 className='text-white font-bold text-2xl text-center max-w-xl'>Where Countless Buyers & Renters Turn Dreams into Reality!</h2>
      </div>

      {/* Interactive Box */}
      <div className='border bg-white rounded-2xl p-2 flex flex-wrap'>

        {/* Search box */}
        <div className='pl-2 pr-10 border-r mblres:ml-4'>
          <p className='pb-2 text-sm'>Search</p>
          <input className='border-b pt-2 text-sm' type="text" placeholder='Enter an address, neighborhood, city, or zip code' />
        </div>

        {/* Property Purpose */}
        <div className=' border-r mx-2 px-4'>
          <p className='pb-2 text-sm'>Property Purpose</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Categories */}
        <div className=' border-r mx-2 px-4'>
          <p className='pb-2 text-sm'>Property Categories</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Btn */}
        <div className='p-4 px-12 flex justify-center text-center'>
          <div className=' cursor-pointer border rounded-full p-2 border-purple-600 bg-purple-300 hover:bg-purple-600 '>
            <Search className=' m-1 h-6 w-6 text-purple-800 hover:text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider