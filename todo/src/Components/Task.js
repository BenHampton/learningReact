import React, { Component } from 'react';
import TaskItems from './TaskItems';

class Task extends Component {

    render() {
        let listItem;
        if(this.props.list) {
            console.log(this.props.list)
            listItem = this.props.list.map( item => {
                return (
                    <TaskItems key={item.id} itemIndex={item}></TaskItems>
                )
            });
        }

        return (
            <div className="Task">
                <table className="table">
                    <tbody>
                        {listItem}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Task;
