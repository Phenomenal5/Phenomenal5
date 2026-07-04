import { Facebook, Instagram, InstagramIcon, Linkedin, LinkedinIcon, SendHorizontal, Twitter, TwitterIcon, X } from 'lucide-react'
import React from 'react'
import on_appstore from '../assets/image/on-appstore.png'
import on_googleplay from '../assets/image/on_googleplay.png'
import barcode from '../assets/image/barcode.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
    // Link details
    const links = [
        {
            support: [
                {
                    label: '111 Bijay sarani, Dhaka,',
                    label2: 'DH 1515, Bangladesh.'
                },
                {
                    label: "exclusive@gmail.com"
                },
                {
                    label: "+88015-88888-9999"
                }
            ],
            account: [
                {
                    label: "My Account"
                },
                {
                    label: "Login / Register"
                },
                {
                    label: "Cart"
                },
                {
                    label: "Wishlist"
                },
                {
                    label: "Shop"
                }
            ],
            quick_link: [
                {
                    label: "Privacy Policy"
                },
                {
                    label: "Terms of use"
                },
                {
                    label: "FAQ"
                },
                {
                    label: "Contact"
                }
            ],
            social: [
                {
                    icon: <Facebook />
                },
                {
                    icon: <Twitter />
                },
                {
                    icon: <InstagramIcon />
                },
                {
                    icon: <LinkedinIcon />
                }
            ]
        }
    ]


  return (
    <div className='bg-[#000000] text-[#f4f4f4]'>
        <div className='flex justify-around p-20'>
            {/* Exclusive section */}
            <div className='flex flex-col'>
                <h1 className='font-bold text-[1.25rem] mb-3'>Exclusive</h1>
                <span className='font-medium text-[1.25rem] my-3'>Suscribe</span>
                <span className='font-[400] text-[1rem] my-3'>Get 10% off your first order</span>
                <span className='flex items-center border p-1'><input type="text" placeholder='Enter your email' className='p-1'/><SendHorizontal size={15} className='mr-1'/></span>
            </div>
            {/* Support section */}
            <div className='flex flex-col'>
                <h1 className='font-bold text-[1.25rem]'>Support</h1>
                {
                    links[0].support.map((item, index) => (
                        <span key={index} className='text-[1rem] font-[400] my-3 flex flex-col'>{item.label}<span>{item.label2}</span></span>
                    ))
                }
            </div>
            {/* Account section */}
            <div className='flex flex-col'>
                <h1 className='font-bold text-[1.25rem]'>Account</h1>
                {
                    links[0].account.map((item, index) => (
                        <Link key={index} className='text-[1rem] font-[400] my-3'>{item.label}</Link>
                    ))
                }
            </div>
            {/* Quick link section */}
            <div className='flex flex-col'>
                <h1 className='font-bold text-[1.25rem]'>Quick Link</h1>
                {
                    links[0].quick_link.map((item, index) => (
                        <Link key={index} className='text-[1rem] font-[400] my-3'>{item.label}</Link>
                    ))
                }
            </div>
            {/* Download App section */}
            <div className='flex flex-col gap-y-4'>
                <h1 className='font-bold text-[1.25rem]' >Download App</h1>
                <span className='text-[.75rem] font-medium text-[hsla(0,0%,96%,0.6)]'>Save $3 with App New User Only</span>
                <div className=' flex gap-x-2'>
                    {/* barcode and app location for client */}
                    <img src={barcode} className='w-[4.75rem] h-[4.75rem] border'/>
                    <div className='flex flex-col items-center justify-center gap-y-1'>
                        <img src={on_googleplay} className='rounded-[.0375rem] h-[30] w-[6.5rem]'/>
                        <img src={on_appstore} className='rounded-[.0375rem] h-[1.875rem] w-[6.5rem]'/>
                    </div>
                </div>
                {/* Soocial links */}
                <div className='text-[#f4f4f4] flex items-center justify-around'>
                    {
                        links[0].social.map((link, index) => (
                            <Link  key={index} >{link.icon}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='text-[1rem] text-[hsla(0,0%,96%,0.3)] border-t border-t-[hsla(0,0%,100%,0.1)] font-normal text-center p-5'>
            <span>&copy; Copyright Rimel 2025. All right reserved</span>
        </div>
    </div>
  )
}

export default Footer