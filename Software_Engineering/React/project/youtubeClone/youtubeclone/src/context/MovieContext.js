import React , { createContext, useContext, useReducer, useState } from 'react'
import { videos } from '../data/videolist';


  const MovieContext = createContext()


  const initialState = {
    filteredVideos : videos,
    inputValue : ''
  }

  const movieReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE_SEARCH':
        
        return {
          ...state,
          filteredVideos : videos.filter(video => video.title.toLowerCase().includes(state.inputValue.toLowerCase()))
        }
      
      case 'ON_INPUT_CHANGE':
        
      return{
        ...state,
        inputValue : (e) => e.target.value
      }

      default:
        return;
    }
  }


export const MovieProvider = ({children}) => {

  const [state , dispatch] = useReducer(movieReducer , initialState)

  // const [filteredVideos, setFilteredVideos] = useState(videos);
  // const [inputValue, setInputValue] = useState('');

  // const handleSearch = (search = '') => {
  //   const result = videos.filter(video => video.title.toLowerCase().includes(search.toLowerCase()));
  //   setFilteredVideos(result);
  // }

  // const onInputChange = (event) => {
  //   const value = event.target?.value || event.currentTarget?.value;
  //   setInputValue(value);
  //   if(handleSearch){
  //     handleSearch(value);
  //   }
  // }


  return (
    <MovieContext.Provider value={{state , dispatch}}>
      {children}
    </MovieContext.Provider>
  )
}

export const useMovie = () => useContext(MovieContext);