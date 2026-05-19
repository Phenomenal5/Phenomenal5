import React , { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software engineer",
        imgSrc: "path/to/image.jpg",
        profession: "Software Engineer"
      },
      show: false,
      timer: 0
    };
    
  }
}
