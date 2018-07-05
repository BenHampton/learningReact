import React, { Component } from 'react';
import TaskItems from './TaskItems';

class Task extends Component {

    render() {
        let listItem;
        if(this.props.list) {
            listItem = this.props.list.map( item => {
                return (
                    <TaskItems key={item.name} itemIndex={item}></TaskItems>
                )
            });
        }

        return (
            <div className="Task">
                <div>
                    taskApp
                </div>
            </div>
        );
    }
}

export default Task;
/*
<form>
    <table className="taskTbl">
        <tr>
            <td>

            </td>
        </tr>
    </table>
</form>
*/