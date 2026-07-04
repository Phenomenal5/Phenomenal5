import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const links = [
    {
      label: "Woman's Fashion",
      icon: <ChevronRight />
    },
    {
      label: "Men's Fashion",
      icon: <ChevronRight />
    },
    {
      label: "Electronics"
    },
    {
      label: "Home & Lifestyle"
    },
    {
      label: "Medicine"
    },
    {
      label: "Sports & Outdoor"
    },
    {
      label: "Baby's & Toys"
    },
    {
      label: "Groceries & Pets"
    },
    {
      label: "Health & Beauty"
    }
  ]
  return (
    <div className='flex flex-col mt-10'>
        {
          links.map((link, index) => (
            <Link key={index} className='flex items-center gap-x-12 justify-between p-3'><span>{link.label}</span>{link.icon}</Link>
          ))
        }
    </div>
  )
}

export default Sidebar