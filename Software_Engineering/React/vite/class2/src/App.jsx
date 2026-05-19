import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import EmailContact from './component/EmailContact';
import GenericContact from './component/GenericContact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleNameInput = (inputtedName) => {
    setName(inputtedName);
  }

  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />}>
          <Route path='/contact/' element = {<EmailContact />} />
          <Route path='/contact/genericcontact' element = {<GenericContact />} />
      </Route>
      <Route path='/login' element = {<Login handleNameInput = {handleNameInput} />} />
      <Route path='/dashboard' element = {<Dashboard name = {name}/>} />
    </Routes>
  );
}

export default App;
