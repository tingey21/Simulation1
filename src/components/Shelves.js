import React, { Component } from 'react';
import './Shelves.css';
import {Link} from 'react-router-dom';

export default class Shelves extends Component {
    render() {
        return (
            <div>
                <Link to='/bins/:id'>
                <h2>This is where our shelves will display </h2>
                </Link>
                <nav ClassName='main_header'></nav>
            </div>
        )
    }
}