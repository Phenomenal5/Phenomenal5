import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MoviesList from './components/MoviesList'
import Footer from './components/Footer'
import { moviesData } from './data'

function App() {
  const [filteredVideos, setFilteredVideos] = useState(moviesData)

  const handleSearch =(search = '') => {
    const result = moviesData.filter(item => item.title.includes(search.toLowerCase()));
    setFilteredVideos(result);
  }

  return (
    <div>
      <Navbar search = {handleSearch} />
      <HeroSection />
      <MoviesList moviesData = {filteredVideos}/>
      <Footer />
    </div>
  )
}

export default App
