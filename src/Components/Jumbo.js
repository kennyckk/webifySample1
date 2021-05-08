import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import {Image} from "react-bootstrap"
import "../stylesheet/jumbotron.css"
import logo from '../img/webify_logo.png'
import "../stylesheet/styles.css"

function Jumbo() {
    return (
        <div id="home" class="mt-5">
            <Jumbotron fluid className="jumbobackground mb-0">
                <div class="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md">
                            <div class="row">
                                <div className="col-12 col-md-6 p-1">
                                        <Image
                                        src={logo}
                                        fluid
                                        className="rounded hover-shadow"
                                    />
                                </div>
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                    <div class="textcolor text-md-left">
                                        <div class="text-wrap">
                                            <h1>
                                                Hi, We are  {" "}
                                                <span class="font-weight-bolder text-wrap"><a>Webify,</a></span>
                                            </h1>
                                            <p >
                                                Your Personal Website Designers to Lead your Business to Success. 
                                            </p>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="col-md-2"></div>
                        
                    </div>

                </div>
            </Jumbotron>
        </div>
    )
}

export default Jumbo
