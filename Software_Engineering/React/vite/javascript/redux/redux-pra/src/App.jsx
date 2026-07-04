import Layout from './components/Layout'
import FriendsList from './pages/FriendsList'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="friends" element={<FriendsList />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>}>
          </Route>
      </Routes>
    </Router>
  )
}

export default App
