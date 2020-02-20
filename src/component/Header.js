import React from 'react';
import Logo from '../picture/logo.png';
import Modal from './Modal';
import {Link} from 'react-router-dom';

function Header () {
    return(
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navHeader">
            <img src={Logo}></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-3">
                <li class="nav-item active">
                    <Link to="/">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/about">
                    <a class="nav-link" href="#">About</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/product">
                    <a class="nav-link" href="#">Product</a>
                    </Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Contact</a>
                    <a class="dropdown-item" href="#">Café story history</a>
                    </div>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <Modal className="w-100"></Modal>
                </form>
            </div>
            </nav>
        </div>
    );
}
export default Header;