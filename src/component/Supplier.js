import React, { Component } from 'react'
import RegisterProduct from './registerProduce'
import uploadSupplier from './UploadSupplier'
import {Route, Switch} from 'react-router-dom'
import Supplier_products from './Supplier_product'


export default class Supplier extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path={"/uploadData"} exact component={RegisterProduct}></Route>
                <Route path={"/uploadData/uploadProduct_Supplier"} component={uploadSupplier}></Route>
                <Route path={"/uploadData/Product_supplier/:id"} component={Supplier_products}></Route>
                </Switch>
            </div>
        )
    }
}
