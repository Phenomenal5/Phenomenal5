import React from 'react'
import { Headset, ShieldCheck, Truck } from 'lucide-react'

const Customercare = () => {
    const data = [
        {
            icon: <Truck size={30}/>,
            title: "FREE AND FAST DELIVERY",
            description: "Free devlivery for all orders $140"
        },
        {
            icon: <Headset size={30}/>,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support"
        },
        {
            icon: <ShieldCheck size={35}/>,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days"
        }
    ]
    return (
        <div className='flex justify-center items-center space-x-[10%] p-5 my-20'>
            {
                data.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <div className='rounded-full bg-[#C1C0C1] text-[#f4f4f4] flex justify-center items-center h-[80px] w-[80px]'>
                            <div className='bg-black rounded-full h-[58px] w-[58px] flex justify-center items-center'>
                                {item.icon}
                            </div>
                        </div>
                        <h1 className='font-semibold text-[20px] mt-5'>{item.title}</h1>
                        <p className='font-normal text-[14px] my-1'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Customercare