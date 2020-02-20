import React, {Component, lazy, Suspense} from 'react'

const LoaderPicture = lazy(() => import('./piccard'))

function Cafecard (){
    return(
        <Suspense fallback={<div className="center">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>}>
            <div>
            <div class="card">
            <LoaderPicture></LoaderPicture>
            <div class="card-body">
                <h5 class="card-title">Cafe name</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">View Details.</a>
            </div>
            </div>
        </div>
        </Suspense>
    )
}
export default Cafecard;