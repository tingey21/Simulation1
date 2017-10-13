import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Bins extends Component {
    render() {
        return (

            <div>
                <Link to ='/bins/detail'>
                <h2>This will show how many bins a shelf has</h2>
                </Link>
            </div>
        )
    }
}