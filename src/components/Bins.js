import React, { Component } from 'react';
import './Bins.css';
import { Link } from 'react-router-dom';

export default class Bins extends Component {
    render() {
        return (
            <div>
                <navbar className='mainNav'>

                    <navbar>Left</navbar>

                </navbar>
                <div>
                    <Link to='/bins/detail'>
                        <h2>This will show how many bins a shelf has</h2>
                    </Link>
                </div>
            </div>

        )
    }
}