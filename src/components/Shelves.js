import React, { Component } from 'react';
import './Shelves.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Shelves extends Component {
    constructor() {
        super();
        this.state = {
            shelves: []
        }
    }
    componentDidMount() {
        const baseUrl = 'http://localhost:8080/test';
        axios.get(baseUrl).then(
            res => this.setState({ shelves: res.data }))

    }


    render() {
        console.log(this.state.shelves)
        var newShelve = this.state.shelves.map(item => {
            return (
                <div>
                    <Link to='/bins/:id'>
                        <div className='shelves'>Shelf {item.shelf_name}</div>
                    </Link>
                </div>
            )
        })
        return (
            <div className='landing_body'>

                <header className='main_header'>
                    <div className='app_logo'></div>
                    <div className='header_text'> SHELFIE</div>
                </header>
                <section className='shelf_container'>
                    {newShelve}
                </section>

            </div>
        )
    }
}