import React from 'react';
import Pic1 from '../picture/cafe1.png'
import Pic2 from '../picture/cafe2.png'
import Pic3 from '../picture/cafe3.png'
import SearchField from "react-search-field";
import Content from './content'
import Region from './Region'

function Mainpage (){
    return(
        <div className="main">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div className="picture">
                        <div class="carousel-item active">
                        <img class="d-block" src={Pic1} alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block" src={Pic2} alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block" src={Pic3} alt="Third slide"></img>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-1 col-md-3"></div>
                        <div className="col-10 col-md-6 col-sm-4">
                            <div class="input-group mb-3">
                            <SearchField
                                placeholder="Search..."
                                classNames="test-class w-100">
                            </SearchField>
                            </div>
                        </div>
                        <div className="col-1 col-md-3"></div>
                    </div>
                </div>
                <Content></Content>
                <Region></Region>
        </div>
    )
}
export default Mainpage;