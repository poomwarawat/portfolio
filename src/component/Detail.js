import React, { Component } from 'react'
import phone1 from '../picture/phone1.jpeg'
import phone2 from '../picture/phone2.jpeg'
import phone3 from '../picture/phone3.jpeg'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="phonePic">
                        <div class="carousel-item active">
                        <img class="d-block w-25" src={phone1} alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-25" src={phone2} alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-25" src={phone3} alt="Third slide"></img>
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
            </div>
        )
    }
}
