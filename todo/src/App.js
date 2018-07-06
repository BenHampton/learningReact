import React, { Component } from 'react';
import AddTask from './Components/AddTask';
import Nav from './Components/Nav';
import Task from './Components/Task';


import './App.css';

const apiURL = 'http://charter-todo.herokuapp.com/todo/v1';

class App extends Component {

    constructor(){
        super();
        this.state = {todo:[]}
    }

    componentDidMount() {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                this.setState({todo: data})
            })
            .catch(error => console.log(error));
    }

    handleAddTask(task){
        let todo = this.state.todo;
        todo.push(task);
        this.setState({todo:todo});
    }

    render() {
    return (
      <div className="App">
          <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to Learning React with SpringBoot as the backend</h1>
        </header>
        <div>
            <AddTask addTask={this.handleAddTask.bind(this)} />
            <Task list={this.state.todo}/>
        </div>
      </div>
    );
  }
}

export default App;


/*
*this.setState({ todo: [
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
* */