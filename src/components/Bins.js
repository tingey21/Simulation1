import React, { Component } from 'react';
import './Bins.css';
import { Link } from 'react-router-dom';

export default class Bins extends Component {
    render() {
        return (
            <div className='bins_body'>
                <header className='mainNav'>
                    <div className='leftNav'>
                         <div className='app_logo2'></div> 
                    </div>
                    <div className='rightNav'>Shelf</div>
                </header>
                <section className='bin_detail_container'>
                    <Link to='/bins/detail'>
                        <div className='bins'>Bin 1</div>
                    </Link>
                    <div className='bins'>Bin 2</div>
                    <div className='bins'>Bin 3</div>
                    <div className='bins'>Bin 4</div>
                    <div className='inventory_bin'>+ Add Inventory</div>
                </section>
            </div>

        )
    }
}