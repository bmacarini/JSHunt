import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import NewProduct from './pages/new-product'
import EditProduct from './pages/edit-product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/products/:id" exact component={Product} />
            <Route path="/new" component={NewProduct} />
            <Route path="/products/:id/edit" exact component={EditProduct} />
        </Switch>
    </BrowserRouter>
);

export default Routes;