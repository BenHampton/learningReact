import React, { Component } from 'react';


class TaskItems extends Component {

    render() {
        console.log("log: " + this.props.itemIndex.task.task);
        return (
            <tr>
                <td>
                    {this.props.itemIndex.task}
                </td>
                <td>
                {new Date(this.props.itemIndex.date).toDateString()}
                </td>
                <td>
                    {this.props.itemIndex.id}
                </td>

            </tr>
        );
    }
}

export default TaskItems;