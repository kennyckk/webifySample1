import React from 'react';
import "../stylesheet/styles.css"

function Features(props) {
    return (
        <div id="features"class="homepage-bgimage">
             <div class="container text-white">
                <div class="row">
                    <h1 class="display-3 font-weight-bolder pt-3">What We Do</h1>
                </div>
                <hr class="solid m-3"></hr>
                <div class="row">
                    <div className="col-12 col-md-4 text-wrap">
                       
                            <h3 class="font-weight-bolder">Web Design + Development</h3>
                            <p>HTML CSS Javascript ReactJS</p>  
                  
                    </div>
                    <div class="col-12 col-md-4 text-wrap">
                        <h3 class="font-weight-bolder">Logo Design</h3>
                        <p>Photoshop</p>
                    </div>
                    <div class="col-12 col-md-4 text-wrap">
                        <h3 class="font-weight-bolder">E-commerce</h3>
                        <p>Google SEO</p>   
                    </div>
                </div>
                <div class="row m-4">
                    <div class="col-12 justify-content-center">
                        <button type="button" class="btn btn-outline-light btn-lg">Our Work</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Features;