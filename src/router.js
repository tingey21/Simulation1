import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shelves from './components/Shelves';
import Bins from './components/Bins';
import BinDetail from './components/BinDetail';

export default (

    <Switch>
        <Route exact path='/' component={Shelves} />
        <Route path='/bins/detail' component={BinDetail} />
        <Route path='/bins/:id' component={Bins} />
    </Switch>
)