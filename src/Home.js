import React from 'react'
import './App.css';
import Header from './component/Header';
import Mainpage from './component/Mainpage';
import Footer from './component/foorter';
import About from './component/about';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './component/register';
import Updata from './component/uploadData';
import Product from './component/Product'
import uploadProduct from './component/uploadProduct'
import registerProduct from './component/registerProduce'
import EditData from './component/EditData'
import Supplier from './component/Supplier'
import basket from './component/basket'

function Home() {
    return(
        <div className="App">
            <BrowserRouter>
            <Header></Header>
            <Route path="/" exact component={Mainpage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/uploadData" component={Supplier}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/product/Upload_product" component={uploadProduct}></Route> 
            <Route path="/editData" component={EditData}></Route>
            <Route path="/basket" component={basket}></Route>
            <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
export default Home