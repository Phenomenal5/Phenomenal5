import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import VideoCard from './component/VideoCard.jsx'
import PopUp from './component/PopUp.jsx'

function App() {
  const [name, setName] = useState("Started")
  const changeName = () => {
    setName("salim");
  }

  useEffect(() => {
    document.title = name;
  }, [name])

  return (
    // <>
    //   <PopUp>
    //     <div>
    //       <h1>i am the main</h1>
    //       <p>i am the descriptiong of the popup</p>
    //     </div>
    //   </PopUp>
    //   <Header />
    //   <Header />
    //   <Header />
    //   <VideoCard
    //     image={
    //       "https://plus.unsplash.com/premium_photo-1706382043380-dd6953b4fd78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fHww"
    //     }
    //     name={"Return of the good guys"}
    //     owner={"Ben"}
    //   />
    //   <VideoCard
    //     image={
    //       "https://plus.unsplash.com/premium_photo-1706382043380-dd6953b4fd78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fHww"
    //     }
    //     name={"Return of the good guys"}
    //     owner={"Ben"}
    //   />
    //   <VideoCard
    //     image={
    //       "https://plus.unsplash.com/premium_photo-1706382043380-dd6953b4fd78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fHww"
    //     }
    //     name={"Return of the good guys"}
    //     owner={"Ben"}
    //   />
    //   <h1>Hello {name}</h1>
    //   <button onClick={changeName}>change Name</button>
    // </>
    <>
      <p>{name}</p>
      <button onClick={changeName}>change name</button>
    </>
  );
}

export default App
