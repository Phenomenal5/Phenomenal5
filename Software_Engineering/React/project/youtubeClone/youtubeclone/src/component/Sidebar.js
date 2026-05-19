import {MdHome, MdExplore, MdSubscriptions, MdVideoLibrary, MdHistory, MdMusicNote, MdSportsSoccer, MdOutlineFeedback, MdSettings, MdHelpOutline} from 'react-icons/md';
import { FaYoutube, FaGamepad, FaNewspaper } from 'react-icons/fa';

const Sidebar = () => {
    const mainLinks = [
        { name: 'Home', icon: <MdHome size={22} /> },
        { name: 'Shorts', icon: <MdExplore size={22} /> },
        { name: 'Subscriptions', icon: <MdSubscriptions size={22} /> },
        { name: 'You', icon: <MdVideoLibrary size={22} /> },
        { name: 'History', icon: <MdHistory size={22} /> },
    ];

    const exploreLinks = [
        { name: 'Trending', icon: <MdExplore size={22} /> },
        { name: 'Music', icon: <MdMusicNote size={22} /> },
        { name: 'Gaming', icon: <FaGamepad size={22} /> },
        { name: 'News', icon: <FaNewspaper size={22} /> },
        { name: 'Sports', icon: <MdSportsSoccer size={22} /> },
    ];

    const moreLinks = [
        { name: 'YouTube Premium', icon: <FaYoutube size={22} /> },
        { name: 'YouTube Music', icon: <FaYoutube size={22} /> },
        { name: 'YouTube Kids', icon: <FaYoutube size={22} /> },
    ];

    const settingsLinks = [
        { name: 'Settings', icon: <MdSettings size={22} /> },
        { name: 'Report history', icon: <MdHistory size={22} /> },
        { name: 'Help', icon: <MdHelpOutline size={22} /> },
        { name: 'Send feedback', icon: <MdOutlineFeedback size={22} /> },
    ];

    return(
        <div className='w-65 bg-white h-screen overflow-y-auto p-4 text-lg border-r border-gray-400 shadow-sm'>
            
            {/*Mainlinks*/}
            <div className='mb-6'>
                {mainLinks.map((item) => (
                    <div className='flex items-center gap-4 p-3 rounded-md cursor-pointer hover:bg-gray-100 transition delay-50 duration-300 ease-in-out'>
                        {item.icon}<span>{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Explore Section */}
            <h4>Explore Section</h4>
            <div className='mb-6'>
                {exploreLinks.map((item) => (
                <div className='flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition delay-50 duration-300 ease-in-out'>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
                ))}
            </div>

            {/* More from YouTube */}
            <h4 className="text-gray-500 font-semibold mb-2 px-2">More from YouTube</h4>
            <div className="mb-6">
                {moreLinks.map((item) => (
                    <div className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition delay-50 duration-300 ease-in-out">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Settings and Support */}
            <div className='mt-4'>
                {settingsLinks.map((item) => (
                    <div className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition delay-50 duration-300 ease-in-out">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-[11px] text-gray-400 mt-8 px-2 leading-4">
                YouTube clone (Vic & Abdul)
                <br /><br />
                2025 Google LLC
            </div>

        </div>
    );
};

export default Sidebar;