import { Shortclip } from "../data/shortlist";

const Shorts = () => {
    return (
        <div className="p-2 m-2 text-black">
            <div className="flex justify-between items-center my-5 mx-4">
                {/* Shorts header */}
                    <div className="flex items-center">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/youtube-shorts.png" alt="youtube-shorts"/>
                        <h1 className="text-2xl font-bold">Shorts</h1>
                    </div>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu-2.png" alt="menu-2"/>
            </div>
            <div className="grid grid-cols-5 gap-5 overflow-x-auto">
                {/* SHort Clips */}
                {Shortclip.map((short) => (
                    <div key = {short.id} className="bg-white w-full">
                        {/* Short image */}
                        <div>
                            <img src={short.image} alt="shorts" className="h-[400px] w-full rounded-lg"/>
                        </div>
                        

                        {/* short description */}
                        <div className="flex flex-row justify-between gap-2 p-2 w-full">
                            {/* Short description and views */}
                            <div>
                                <h2 className="text-xl font-semibold">{short.description}</h2>
                                <p>{short.views} views</p>
                            </div>
                             {/* Menu icon */}
                            <div>
                                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/menu-2.png" alt="menu-2"/>
                            </div>
                            
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Shorts;