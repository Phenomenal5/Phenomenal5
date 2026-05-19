import { Appetizer } from "../Data/Appetizer";
import { Dessert } from "../Data/Dessert";
import { Main } from "../Data/Main_course";


import React from 'react'

const Menu = () => {
    return (
        <div>
            <div className="bg-gray-400 w-full text-white">
                <h1 className="p-2">Our Menu</h1>
            </div>
            <div className="bg-gray-400 p-10">
                {/* Appetizers */}
                <div className="text-center">
                    <h1 className="h-1">Appetizers</h1>
                    <div className="flex gap-5">
                        {Appetizer.map(clip => (
                        <div key={clip.id} className="border border-white bg-white">
                            {/* Image */}
                            <div>
                                <img src= {clip.image} alt={clip.name}/>
                            </div>
                            {/* Description */}
                            <div className="bottom-0 flex flex-col h-full">
                                <div className="p-5">
                                    <h1>{clip.name}</h1>
                                    <p>{clip.description}</p>
                                </div>
                                <div className=" items-baseline w-full bg-gray-100">
                                    <p className="text-left">cost: ${clip.price}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    </div>
                </div>
                {/* Main Course */}
                <div>
                    <h1>Main Course</h1>
                    <div className="flex gap-5">
                        {Main.map(clip => (
                            <div key={clip.id}>
                                {/* Image */}
                                <div>
                                    <img src= {clip.image} alt={clip.name}/>
                                </div>
                                {/* Description */}
                                <div>
                                    <h1>{clip.name}</h1>
                                    <p>{clip.description}</p>
                                    <div>
                                        <p>cost: ${clip.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                {/* Desserts */}
                <div>
                    <h1>Desserts</h1>
                    <div className="flex gap-5">
                        {Dessert.map(clip => (
                            <div key={clip.id}>
                                {/* Image */}
                                <div>
                                    <img src= {clip.image} alt={clip.name}/>
                                </div>
                                {/* Description */}
                                <div>
                                    <h1>{clip.name}</h1>
                                    <p>{clip.description}</p>
                                    <div>
                                        <p>cost: ${clip.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Menu