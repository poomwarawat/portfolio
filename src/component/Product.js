import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Container_product from './containerProduct'
import UpProduct from './uploadProduct'
import Detail from './Detail'

export default class Product extends Component {
    render() {
        return (
            <div>
                <Route path="/product" exact component={Container_product}></Route>
                <Route path="/product/detail_product" component={Detail}></Route>
                <Route path="/Upload_product" component={UpProduct}></Route>
                
            </div>
        )
    }
}
