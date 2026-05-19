import React , { Component } from 'react';
import img from './asset/passport.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jimba Abdullahi Olakunle",
        bio: "Aspiring full-stack software engineer | Exploring the intersection of technology and creativity | Open to collaboration and learning.",
        imgSrc: img,
        profession: "Software Engineer"
      },
      show: false,
      mountedTime: 0
    };
    this.timer = null;
  }

  // method that runs once when component mounts
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }))
    }, 1000);
  }

  // method to stop the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // toggle button handler to toggle the show state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    const {person , show, mountedTime} = this.state;

    return (
      <div style={{textAlign: "center", marginTop: "5rem"}}>
        <h1>React Class Component Checkpoint</h1>
        <div style={{width: "80%", margin: "0px auto", padding: "5rem"}}>
          {show ? (
            <div>
              <img src={person.imgSrc} alt={person.fullName} style={{width: "20rem"}}/>
              <h2>{person.fullName}</h2>
              <p >{person.profession}</p>
              <p>{person.bio}</p>
            </div>
          ): ''}
        <button onClick={this.toggleShow} style={{ padding: "10px 20px", margin: "10px" }}>{show ? "Hide profile": "Show profile"}</button>
        <h3>⏱ Time since mounted: {mountedTime} second{mountedTime >= 2 ? "s":'' }</h3>
        </div>
      </div>
    )
  }
}

export default App