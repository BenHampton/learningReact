import React, { Component } from 'react';
import nav from '../css/nav.css';

class Nav extends Component {

    render() {
        return (
            <div className="box Name">
                <nav className="box menuBar">
                    <a href="#">Add Task</a>
                    <a href="#">View Tasks</a>
                </nav>
            </div>
        );
    }
}

export default Nav;