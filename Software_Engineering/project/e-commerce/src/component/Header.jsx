import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Header = () => {
    return (
        <div className='flex items-center justify-center bg-[#000000] text-[#fafafa] h-[48px] text-[14px]'>
                <span className='flex flex-1 justify-center'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                    <Link className='border-b font-semibold ml-5'>ShopNow</Link>
                </span>
                <span className='flex justify-end items-center gap-x-2 mr-20'>English <ChevronDown /></span>
        </div>
    )
}

export default Header