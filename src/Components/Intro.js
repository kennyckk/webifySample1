import React from 'react';
import { Badge, Alert, Image } from 'react-bootstrap';
import "../stylesheet/styles.css"
import introPic from '../img/hkustPhoto.jpeg'

function Intro(props) {
    return (
        <div id="intro"class="introbackground p-2">
            <div class="container">
                
                    
                        <Alert className="d-none d-md-block"variant="light ">
                            <div class="row">
                                <div class="col-md-6 text-left my-auto">
                                    <div>
                                        <Alert.Heading class="display-5">Who We Are</Alert.Heading>
                                        <Badge variant="info">Designers and Developers from HKUST</Badge>
                                        <hr/>
                                        <p>
                                            The founders are graduated from the Business and Engineering school of HKUST in 2019. We have years of experience in web application development.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <Image
                                    src={introPic}
                                    fluid
                                    rounded
                                    />
                                    
                                </div>
                            </div>
                        </Alert>

                        <div className="d-block d-md-none col-12">
                            <div class="bg-image hover-overlay">
                                <img src={introPic} class="w-100" />
                                <div class="mask gradientMask text-white align-items-center d-flex">
                                    <div>
                                                 <h1 class="display-5">Who We Are</h1>
                                                <hr/>
                                                <h4>Designers and Developers from HKUST</h4>
                                                <p>
                                                    The founders are graduated from the Business and Engineering school of HKUST in 2019. We have years of experience in web application development.
                                                </p>
                                    </div>
                                     
                                </div>
                            </div>

                        </div>
                    
                    
                    

               

            </div>
        </div>
    );
}

export default Intro;