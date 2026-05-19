import React from 'react'

const PopUp = ({children}) => {
    return (
        <div className='bg-[rgba(0,0,0,0.5)] h-[100vh] w-full fixed top-0 left-0 flex justify-center items-center'>
            {children}
        </div>
    )
}

export default PopUp