import React from 'react'
import Citycard from './citycard'

function Region (){
    return(
        <div className="container">
            <div className="regionspace">
                <p>Region</p>
                <h3>Exploer by city</h3>
                <div className="row">
                    <div className="col-md-6">
                        <Citycard></Citycard>
                    </div>
                    <div className="col-md-6">
                        <Citycard></Citycard>
                    </div>
                    <div className="col-md-6">
                        <Citycard></Citycard>
                    </div>
                    <div className="col-md-6">
                        <Citycard></Citycard>
                    </div>
                </div>
                <a href="#"><h3>See more ...</h3></a>
            </div>
        </div>
    )
}
export default Region;