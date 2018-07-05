import React, { Component } from 'react';

class AddTask extends Component {

    constructor(){
        super();
        this.state = {
            newTask:{}
        }
    }

    addTask = function(e){
        e.preventDefault();
        let nm = this.refs.fname.value;
        let task = this.refs.task.value
    }

    render() {
        return (
            <div className="Name">
                <form onSubmit={this.addTask.bind(this)}>
                    <label>First Name: </label>
                    <input id='name' type="text" ref="fname" />
                    <br />
                    <label>Task: </label>
                    <input id='task' type="text" ref="task" />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
    );

    }
}

export default AddTask;