import React, { Component } from 'react';

const apiURL = 'http://charter-todo.herokuapp.com/todo/v1';

class AddTask extends Component {

    constructor(){
        super();
        this.state = {
            newTask:{}
        }
    }

    handleTask = function(e) {
        e.preventDefault();

        const _this = this;

        let task = this.refs.task.value;
        console.log("task: " + task);
        if(task === ''){
            alert('Field was left blank');
        }else{
            console.log("POST")
            fetch(apiURL, {
                method: "POST",
                body: task
            })
                .then((response) => response.json())
                .then(function (data) {
                        console.log('resquest good: ', data);
                        _this.setState({newTask:{
                                task: task
                            }}, function(){
                            _this.props.addTask(data);
                        });
                })
                .catch(function(error) {
                    console.log('bad', error);
                });
        }
    }

    render() {
        return (
            <div className="Name">
                <form onSubmit={this.handleTask.bind(this)}>
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