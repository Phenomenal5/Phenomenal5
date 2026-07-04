
import { Link } from 'react-router-dom'
import hero_img from '../assets/image/hero-endframe.jpg'
import { ReactComponent as Apple} from '../assets/icon/apple-logo.svg'
import {  ArrowRight } from 'lucide-react'

const Hero = () => {
  
  return (
    <div className='flex justify-center min-w-[55.75rem] mt-10 bg-[#000000] p-5'>
        {/* Hero section */}
        <div className="flex items-center justify-center text-[#FAFAFA] px-10">
          <div className="flex flex-col">
            <span className="flex items-center gap-x-5 text-[1rem]">
              <Apple /> iphone 14 series
            </span>
            <span className="text-[3rem] font-semibold w-[18.375rem] my-5">
              Up to 10% off Voucher
            </span>
            <Link className="flex">
              <span className="border-b p-0.5">Shop Now</span>
              <ArrowRight width={"3rem"} />
            </Link>
          </div>
          <img src={hero_img} className = 'max-w-[31rem] max-h-[22rem]' />
        </div>
        <div></div>
      </div>
  );
}

export default Hero