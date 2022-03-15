import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Category from '../pages/Category'
import Product from '../pages/Product'
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/category/:slug' component={Product}/>
      <Route path='/category' component={Category}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  )
}

export default Routes