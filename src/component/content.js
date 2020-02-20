import React from 'react';
import Cafecard from './cafecard'

function Content (){
    return(
        <div className="container">
            <div className="line">
                <h3>Top 10 Cafe Review</h3>
                <div className="row">
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                </div>
            </div>
            <div className="line">
                <h3>Near me</h3>
                <div className="row">
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                </div>
            </div>
            <div className="line">
                <h3>Bangmod</h3>
                <div className="row">
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                    <div className="col-md-4">
                    <Cafecard></Cafecard>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;