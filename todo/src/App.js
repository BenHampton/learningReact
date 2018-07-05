import React, { Component } from 'react';
import AddTask from './Components/AddTask';
import Nav from './Components/Nav';

import './App.css';

//const apiURL = 'http://localhost:8081/todo/v1'

class App extends Component {

    constructor(){
        super();
        this.state = {todo:[]}
    }

    componentDidMount() {
        this.setState({ todo: [
        {
            name: 'Ben',
            date: 'today',
            task: 'React'
        },
        {
            name: 'Jeff',
            date: 'Tomorrow',
            task: 'Spring Boot'
        },
        {
            name: 'Admir',
            date: 'Yesterday',
            task: 'Coding'
        }
    ]});
    }

    render() {
    return (
      <div className="App">
          <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to Learning React with SpringBoot as the backend</h1>
        </header>
        <div>
            <AddTask />
        </div>
      </div>
    );
  }
}

export default App;
