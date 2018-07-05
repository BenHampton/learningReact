import React, { Component } from 'react';


class TaskItems extends Component {

    render() {
        return (
            <div>
                {this.props.itemIndex.date}
            </div>
        );
    }
}

export default TaskItems;