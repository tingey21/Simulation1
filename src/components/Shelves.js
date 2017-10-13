import React, { Component } from 'react';
import './Shelves.css';
import { Link } from 'react-router-dom';

export default class Shelves extends Component {
    render() {
        return (
            <div className='landing_body'>

                <header className='main_header'>
                    <div className='app_logo'></div>
                    <div className='header_text'> SHELFIE</div>
                </header>
                <section className='shelf_container'>
                    <Link to='/bins/:id'>
                    <div className='shelves'>Shelf</div>
                    </Link>
                    <div className='shelves'>Shelf</div>
                    <div className='shelves'>Shelf</div>
                    <div className='shelves'>Shelf A </div>
                </section>
            </div>
        )
    }
}