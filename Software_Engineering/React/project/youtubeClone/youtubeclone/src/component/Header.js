import { useMovie } from "../context/MovieContext";


const Header = () => {
  const {state , dispatch} = useMovie()
    
    return (
      <nav className="flex justify-between items-center px-4 py-2 bg-white text-black">
        <div className="flex items-center space-x-6 ml-4">
          {/* Menu button */}
          <a href="#" className="rounded-full h-10 w-10 hover:bg-gray-100">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="menu--v1"
              className="mx-auto my-[25%]"
            />
          </a>

          {/* Logo*/}
          <a href="#" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube Logo"
              className="h-5"
            />
            <span className="text-xl font-bold">YouTube</span>
          </a>
        </div>

        <div className="flex items-center space-x-4 h-10 rounded-full border border-white w-[50%]">
          {/* Search bar */}
          <div className="flex items-center w-full rounded-full bg-gray-50 border border-gray-300">
            {/* Search input field */}
            <input
              value={state.inputValue}
              onChange={dispatch({type : 'HANDLE_SEARCH'})}
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-300 rounded-s-full p-2 w-[100%] h-10"
            />
            {/* Search icon button */}-
            <button className="bg-gray-50 text-white h-10 w-[10%] ml-3 hover:bg-gray-200 rounded-r-full">
              <img
                src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
                alt="search--v1"
                className=" mx-auto"
              />
            </button>
          </div>

          {/* Microphone button */}
          <div className="rounded-full h-10 w-10">
            <button className="bg-gray-100 rounded-full h-10 w-10 hover:bg-gray-200">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/material-sharp/48/microphone--v1.png"
                alt="microphone--v1"
                className="mx-auto"
              />
            </button>
          </div>
        </div>
        {/* sign in */}
        <div className="flex items-center space-x-2">
          {/* settings button */}
          <button>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-regular/48/menu-2--v1.png"
              alt="menu-2--v1"
            />
          </button>
          {/* Sign in button */}
          <button className="text-blue-500 rounded-full border-1 p-1 px-3 hover:bg-blue-100">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
              alt="user-male-circle--v1"
              className="inline"
            />{" "}
            Sign In
          </button>
        </div>
      </nav>
    );
}

export default Header;